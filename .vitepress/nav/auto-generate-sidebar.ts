import fs from 'fs'
import path from 'path'

export interface BarItem {
  text: string,
  link: string
}

/**
 * 获取文件夹下所有文件名称，生成sidebar
 * @param dir 目录名称
 * @returns 
 */
export function generateSidebar(dir: string) {
  const bars: BarItem[] = []
  let curDir = path.join(path.resolve(__dirname, '../../'), dir)
  let files = fs.readdirSync(curDir, { withFileTypes: false })
  files.forEach(filename => {
    if (filename.endsWith('.md') && filename !== 'index.md') {
      let name = filename.replace('.md', '')
      bars.push({ text: name, link: `/${dir}/${name}.html` })
    }
  })
  return bars;
}
