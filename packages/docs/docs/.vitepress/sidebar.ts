/**
 * @ Author: supbose
 * @ Create Time: 2023-03-15 18:28:15
 * @ Modified by: supbose
 * @ Modified time: 2023-03-16 00:22:37
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
interface SidebarGenerateConfig {
	/**
	 * 需要遍历的目录. 默认:articles
	 */
	dirName?: string
	/**
	 * 忽略的文件名. 默认: index.md
	 */
	ignoreFileName?: string
	/**
	 * 忽略的文件夹名称. 默认: ['demo','asserts']
	 */
	ignoreDirNames?: string[]
}
export default function getSidebarData(
	sidebarGenerateConfig: SidebarGenerateConfig = {}
) {
	const {
		dirName = 'articles',
		ignoreFileName = 'index.md',
		ignoreDirNames = ['demo', 'asserts']
	} = sidebarGenerateConfig
	// 获取目录的绝对路径
	const dirFullPath = resolve(__dirname, `../${dirName}`)
	const allDirAndFileNameArr = readdirSync(dirFullPath)
	const obj = {}
	allDirAndFileNameArr.map((dirName) => {
		let subDirFullName = join(dirFullPath, dirName)
		const property =
			getDocsDirNameAfterStr(subDirFullName).replace(/\\/g, '/') + '/'
		const arr = getSideBarItemTreeData(
			subDirFullName,
			1,
			2,
			ignoreFileName,
			ignoreDirNames
		)
		obj[property] = arr
	})
	// console.log('sidebarData')
	// console.log(obj)
	return obj
}

interface SideBarItem {
	text: string
	collapsible?: boolean
	collapsed?: boolean
	items?: SideBarItem[]
	link?: string
}
function getSideBarItemTreeData(
	dirFullPath: string,
	level: number,
	maxLevel: number,
	ignoreFileName: string,
	ignoreDirNames: string[]
): SideBarItem[] {
	// 获取所有文件名和目录名
	const allDirAndFileNameArr = readdirSync(dirFullPath)
	const result: SideBarItem[] = []
	allDirAndFileNameArr.map((fileOrDirName: string, idx: number) => {
		const fileOrDirFullPath = join(dirFullPath, fileOrDirName)
		const stats = statSync(fileOrDirFullPath)
		if (stats.isDirectory()) {
			if (!ignoreDirNames.includes(fileOrDirName)) {
				const text = fileOrDirName.match(/^[0-9]{2}-.+/)
					? fileOrDirName.substring(3)
					: fileOrDirName
				// 当前为文件夹
				const dirData: SideBarItem = {
					text,
					collapsed: false
				}
				if (level !== maxLevel) {
					dirData.items = getSideBarItemTreeData(
						fileOrDirFullPath,
						level + 1,
						maxLevel,
						ignoreFileName,
						ignoreDirNames
					)
				}
				if (dirData.items) {
					dirData.collapsible = true
				}
				// console.log('dirData', dirData)
				result.push(dirData)
			}
		} else if (
			isMarkdownFile(fileOrDirName) &&
			ignoreFileName !== fileOrDirName
		) {
			// console.log(fileOrDirName)
			// 当前为文件
			const matchResult = fileOrDirName.match(/(.+)\.md/)
			let text = matchResult ? matchResult[1] : fileOrDirName
			text = text.match(/^[0-9]{2}-.+/) ? text.substring(3) : text
			// console.log(text)
			const fileData: SideBarItem = {
				text,
				link: getDocsDirNameAfterStr(fileOrDirFullPath)
					.replace('.md', '')
					.replace(/\\/g, '/')
			}
			result.push(fileData)
		}
	})
	return result
}
