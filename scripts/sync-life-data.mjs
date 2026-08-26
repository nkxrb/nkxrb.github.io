#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const siteRepo = resolve(scriptDir, '..')
const dataRepo = resolve(process.env.LIFE_DATA_REMOTE_REPO || '/Users/nkxrb/kidar-gitee/anzai-data')
const siteDataDir = join(siteRepo, 'life/data')
const remoteDataDir = join(dataRepo, 'life/data')
const lifeDataModule = join(siteRepo, '.vitepress/theme/components/life-data.ts')

const args = process.argv.slice(2)
const hasArg = flag => args.includes(flag)
const readArg = prefix => {
  const item = args.find(arg => arg.startsWith(`${prefix}=`))
  return item ? item.slice(prefix.length + 1) : ''
}

const checkOnly = hasArg('--check')
const sync = hasArg('--sync') || hasArg('--commit') || hasArg('--push')
const commit = hasArg('--commit') || hasArg('--push')
const push = hasArg('--push')
const fromRemote = hasArg('--from-remote')
const skipBuild = hasArg('--skip-build')
const message = readArg('--message') || 'chore: sync life data'

function run(command, commandArgs, cwd, options = {}) {
  const output = execFileSync(command, commandArgs, {
    cwd,
    encoding: 'utf8',
    stdio: options.stdio || 'pipe'
  })
  return typeof output === 'string' ? output.trim() : ''
}

function git(cwd, commandArgs, options) {
  return run('git', commandArgs, cwd, options)
}

function assertRepo(path, label) {
  if (!existsSync(join(path, '.git'))) throw new Error(`${label} is not a Git repository: ${path}`)
  git(path, ['rev-parse', '--show-toplevel'])
  git(path, ['remote', 'get-url', 'origin'])
  git(path, ['config', 'user.name'])
  git(path, ['config', 'user.email'])
}

function walkFiles(root) {
  const files = []
  const visit = dir => {
    for (const name of readdirSync(dir).sort()) {
      if (name === '.DS_Store') continue
      const path = join(dir, name)
      const stat = statSync(path)
      if (stat.isDirectory()) {
        visit(path)
      } else if (stat.isFile()) {
        files.push(relative(root, path))
      }
    }
  }
  visit(root)
  return files
}

function hashFile(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex')
}

function copyFileTree(source, target) {
  rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  for (const file of walkFiles(source)) {
    const sourceFile = join(source, file)
    const targetFile = join(target, file)
    mkdirSync(dirname(targetFile), { recursive: true })
    writeFileSync(targetFile, readFileSync(sourceFile))
  }
}

function importedLifeDataFiles() {
  const code = readFileSync(lifeDataModule, 'utf8')
  const imports = new Set()
  const pattern = /from\s+['"]\.\.\/\.\.\/\.\.\/life\/data\/([^'"]+\.json)['"]/g
  let match = pattern.exec(code)
  while (match) {
    imports.add(match[1])
    match = pattern.exec(code)
  }
  return [...imports].sort()
}

function compareDataDirs() {
  const siteFiles = walkFiles(siteDataDir)
  const remoteFiles = walkFiles(remoteDataDir)
  const allFiles = [...new Set([...siteFiles, ...remoteFiles])].sort()
  const missingInSite = []
  const missingInRemote = []
  const changed = []

  for (const file of allFiles) {
    const siteFile = join(siteDataDir, file)
    const remoteFile = join(remoteDataDir, file)
    if (!existsSync(siteFile)) {
      missingInSite.push(file)
    } else if (!existsSync(remoteFile)) {
      missingInRemote.push(file)
    } else if (hashFile(siteFile) !== hashFile(remoteFile)) {
      changed.push(file)
    }
  }

  return { missingInSite, missingInRemote, changed }
}

function validateDataDirs() {
  const requiredFiles = importedLifeDataFiles()
  const missingRequired = []
  for (const file of requiredFiles) {
    if (!existsSync(join(siteDataDir, file))) missingRequired.push(`site:${file}`)
    if (!existsSync(join(remoteDataDir, file))) missingRequired.push(`remote:${file}`)
  }

  if (missingRequired.length) {
    throw new Error(`Missing imported life/data files:\n${missingRequired.map(item => `  - ${item}`).join('\n')}`)
  }

  const diff = compareDataDirs()
  const hasDiff = diff.missingInSite.length || diff.missingInRemote.length || diff.changed.length
  if (hasDiff) {
    throw new Error([
      'life/data directories are not identical.',
      ...diff.missingInSite.map(file => `  - missing in site: ${file}`),
      ...diff.missingInRemote.map(file => `  - missing in remote: ${file}`),
      ...diff.changed.map(file => `  - changed: ${file}`)
    ].join('\n'))
  }
}

function hasPathChanges(repo, pathspec) {
  const status = git(repo, ['status', '--porcelain', '--', pathspec])
  return Boolean(status)
}

function commitPath(repo, pathspec, commitMessage) {
  if (!hasPathChanges(repo, pathspec)) {
    console.log(`[skip] no ${pathspec} changes in ${repo}`)
    return false
  }

  git(repo, ['add', pathspec], { stdio: 'inherit' })
  const staged = git(repo, ['diff', '--cached', '--name-only', '--', pathspec])
  if (!staged) {
    console.log(`[skip] no staged ${pathspec} changes in ${repo}`)
    return false
  }

  git(repo, ['commit', '-m', commitMessage], { stdio: 'inherit' })
  return true
}

function pushRepo(repo) {
  const branch = git(repo, ['branch', '--show-current'])
  if (!branch) throw new Error(`Cannot determine current branch for ${repo}`)
  git(repo, ['push', 'origin', `HEAD:${branch}`], { stdio: 'inherit' })
}

function main() {
  assertRepo(siteRepo, 'site repo')
  assertRepo(dataRepo, 'data repo')
  if (!existsSync(siteDataDir)) throw new Error(`Missing site life/data: ${siteDataDir}`)
  if (!existsSync(remoteDataDir)) throw new Error(`Missing remote life/data: ${remoteDataDir}`)

  if (sync) {
    const source = fromRemote ? remoteDataDir : siteDataDir
    const target = fromRemote ? siteDataDir : remoteDataDir
    console.log(`[sync] ${source} -> ${target}`)
    copyFileTree(source, target)
  } else if (!checkOnly) {
    console.log('[check] use --sync to mirror directories, --commit to commit, or --push to commit and push')
  }

  validateDataDirs()
  console.log('[ok] life/data directories are identical and imported JSON files exist in both repos')

  if (!skipBuild) {
    run('pnpm', ['run', 'build'], siteRepo, { stdio: 'inherit' })
  }

  if (commit) {
    commitPath(siteRepo, 'life/data', message)
    commitPath(dataRepo, 'life/data', message)
  }

  if (push) {
    pushRepo(siteRepo)
    pushRepo(dataRepo)
  }
}

try {
  main()
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
