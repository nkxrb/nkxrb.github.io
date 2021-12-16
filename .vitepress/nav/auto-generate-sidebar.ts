import fs from 'fs'
import path from 'path'

/**
 * 过滤所要导航的文件
 * 文件名 包含.md 但 不包含  README */
function checkFileType(path) {
  return path.includes(".md") && (!path.includes("README"));
}

/**
 * 格式化文件路径*/
function prefixPath(basePath, dirPath) {
  let index = basePath.indexOf("/")
  // 去除一级目录地址
  basePath = basePath.slice(index, path.length)
  // replace用于处理windows电脑的路径用\表示的问题
  return path.join(basePath, dirPath).replace(/\\/g, "/")
}

/**
 * 截取文档路径*/
function getPath(path, ele) {
  let item = prefixPath(path, ele);
  if (item.split('/')[6]) {
    return item.split('/')[3] + '/' + item.split('/')[4] + '/' + item.split('/')[5] + '/' + item.split('/')[6]
  } else if (item.split('/')[5]) {
    return item.split('/')[3] + '/' + item.split('/')[4] + '/' + item.split('/')[5]
  } else if (item.split('/')[4]) {
    return item.split('/')[3] + '/' + item.split('/')[4]
  } else {
    return item.split('/')[3]
  }
}

/**
 * 递归获取分组信息并排序*/
function getGroupChildren(dirPath: string) {
  let bars = []
  let palist = fs.readdirSync(dirPath + "/");
  palist.forEach(function (item, index) {
    let info = fs.statSync(dirPath + "/" + item);
    if (info.isDirectory()) {
      let group = {};
      group.title = item.split('-')[0];
      group.collapsable = true;
      group.sidebarDepth = 2;
      group.children = getGroupChildren(dirPath + "/" + item);
      bars.push(group);
    } else {
      if (checkFileType(item)) {
        bars.push(getPath(dirPath, item));
      }
    }
  })

  return bars
}
/**
 * 初始化*/
function generateSidebar(dir: string) {
  var root = []
  let curDir = path.resolve(__dirname, '../../') + dir
  console.log(curDir)
  getGroupChildren(curDir);
  return root;
}

export { generateSidebar }