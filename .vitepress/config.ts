import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';
import { navbar, sidebar } from './nav/index';

const BASE = '/'
const PROJECT_ROOT = process.cwd()
const TVM_ROOT = path.resolve(PROJECT_ROOT, 'tvm')
const DIST_TVM_ROOT = path.resolve(PROJECT_ROOT, 'dist/tvm')

function tvmStaticPlugin() {
  return {
    name: 'tvm-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUrl = req.url || ''
        const pathname = decodeURIComponent(rawUrl.split('?')[0])
        if (pathname !== '/tvm' && !pathname.startsWith('/tvm/')) {
          next()
          return
        }

        if (pathname === '/tvm') {
          res.statusCode = 301
          res.setHeader('Location', '/tvm/')
          res.end()
          return
        }

        let relativePath = pathname.slice('/tvm'.length)
        if (!relativePath || relativePath.endsWith('/')) {
          relativePath = path.join(relativePath, 'index.html')
        }

        const filePath = path.resolve(TVM_ROOT, `.${relativePath}`)
        if (filePath !== TVM_ROOT && !filePath.startsWith(TVM_ROOT + path.sep)) {
          res.statusCode = 403
          res.end('Forbidden')
          return
        }

        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          next()
          return
        }

        res.setHeader('Content-Type', getMimeType(filePath))
        fs.createReadStream(filePath).pipe(res)
      })
    },
    closeBundle() {
      if (fs.existsSync(TVM_ROOT)) {
        fs.cpSync(TVM_ROOT, DIST_TVM_ROOT, { recursive: true })
      }
    }
  }
}

function getMimeType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase()
  const mimes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
  }
  return mimes[ext] || 'application/octet-stream'
}

export default defineConfig({
  lang: 'zh-cn',
  title: 'nkxrb',
  description: '每一个不曾起舞的日子，都是对生命的辜负。',
  base: BASE,
  lastUpdated: true,
  head: [
    // 改变title的图标 图片放在public文件夹下
    ['link', { rel: 'icon', href: BASE + 'favicon.ico' }],
  ],
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: './dist',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/nkxrb/nkxrb.github.io', }
    ],
    // repo: '',
    // repoLabel: 'GITHUB',
    // darkMode: true,
    // toggleSidebar: '护眼',
    // lastUpdated: false,
    // backToHome: '地址可能发生了改变，返回首页试试呢',
    nav: navbar,
    sidebar: sidebar
  },
  // define: {
  //   __GLOBAL_FOO: 'foo'
  // },
  vite:{
    server: {
      port: 12900
    },
    plugins: [
      wasm(),
      topLevelAwait(),
      tvmStaticPlugin()
    ],
  },
  markdown: {
    config: (md) => { }
  }
})
