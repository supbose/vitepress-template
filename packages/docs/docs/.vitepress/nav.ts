/**
 * @ Author: supbose
 * @ Create Time: 2023-03-15 18:27:53
 * @ Modified by: supbose
 * @ Modified time: 2023-04-09 11:31:59
 * @ Description: qingshu.work
 */

import { resolve, join, sep } from 'path'
import { readdirSync, statSync } from 'fs'
import { DefaultTheme } from 'vitepress'

/**
 * 判断是否为markdown文件
 *
 * @param   {string}  fileName  文件名
 *
 * @return  {[boolean]}         有返回值则表示是markdown文件,否则不是
 */
function isMarkdownFile(fileName: string) {
  return fileName.match(/.+\.md$/)
}
// 获取docs目录的完整名称(从根目录一直到docs目录)
const docsDirFullPath = join(__dirname, '../')
// 获取docs目录的完整长度
const docsDirFullPathLen = docsDirFullPath.length
/**
 * 获取dirOrFileFullName中第一个/docs/后的所有内容
 *
 * 如:
 * /a-root/docs/test 则 获取到 /test
 * /a-root-docs/docs/test 则 获取到 /test
 * /a-root-docs/docs/docs/test 则 获取到 /docs/test
 *
 * @param   {string}  dirOrFileFullName  文件或者目录名
 *
 * @return  {[type]}                     [return description]
 */
function getDocsDirNameAfterStr(dirOrFileFullName: string) {
  // 使用docsDirFullPathLen采用字符串截取的方式，避免多层目录都叫docs的问题
  return `${sep}${dirOrFileFullName.substring(docsDirFullPathLen)}`
}

function getDirectories(distPath) {
  return readdirSync(distPath)
    .filter(function (file) {
      return statSync(distPath + '/' + file).isDirectory()
    })
    .filter(function (distPath) {
      return distPath != 'test' && distPath != 'offline'
    })
}
interface NavGenerateConfig {
  /**
   * 是否启用路由匹配显示激活状态. 默认:false
   */
  enableDirActiveMatch: boolean
  /**
   * 需要遍历的目录. 默认:articles
   */
  dirName?: string
  /**
   * 最大遍历层级. 默认:1
   */
  maxLevel?: number
}

export default function getNavData(navGenerateConfig: NavGenerateConfig) {
  const { enableDirActiveMatch, dirName = 'articles', maxLevel = 2 } = navGenerateConfig
  const dirFullPath = resolve(__dirname, `../${dirName}`)

  const result = getNavDataArr(dirFullPath, 1, maxLevel, enableDirActiveMatch)

  return result
}

/**
 * 获取顶部导航数据
 *
 * @param   {string}     dirFullPath  当前需要遍历的目录绝对路径
 * @param   {number}     level        当前层级
 * @param   {number[]}   maxLevel     允许遍历的最大层级
 * @param   {boolean}    enableActiveMatch 是否启用路由匹配显示激活状态
 *
 * @return  {NavItem[]}               导航数据数组
 */
function getNavDataArr(
  dirFullPath: string,
  level: number,
  maxLevel: number,
  enableActiveMatch: boolean
): DefaultTheme.NavItem[] {
  const allDirAndFileNameArr = getDirectories(dirFullPath)

  const result: DefaultTheme.NavItem[] = []
  allDirAndFileNameArr.map((fileOrDirName: string, idx: number) => {
    const fileOrDirFullPath = join(dirFullPath, fileOrDirName)
    const stats = statSync(fileOrDirFullPath)
    const link = getDocsDirNameAfterStr(fileOrDirFullPath).replace('.md', '').replace(/\\/g, '/')
    // console.log('fileOrDirFullPath----->  ', fileOrDirFullPath)
    // console.log(link)
    const text = fileOrDirName.match(/^[0-9]{2}-.+/) ? fileOrDirName.substring(3) : fileOrDirName
    if (stats.isDirectory()) {
      // 当前为文件夹

      // console.log(level)
      let dirData: DefaultTheme.NavItem = {
        text,
        link: `${link}/`,
        items: []
      }

      if (level !== maxLevel) {
        // @ts-ignore
        dirData.items = getNavDataArr(fileOrDirFullPath, level + 1, maxLevel, enableActiveMatch)
      }
      if (enableActiveMatch) {
        dirData.activeMatch = link + '/'
      }
      if (level === 1) {
        delete dirData['link']
      }
      if (dirData['items'].length == 0) {
        delete dirData['items']
        dirData['link'] = `${link}/`
      }
      result.push(dirData)
    } else if (isMarkdownFile(fileOrDirName)) {
      // 当前为文件
      const fileData: DefaultTheme.NavItem = {
        text,
        link: link
      }
      if (enableActiveMatch) {
        fileData.activeMatch = link + '/'
      }

      result.push(fileData)
    }
  })

  return result
}
