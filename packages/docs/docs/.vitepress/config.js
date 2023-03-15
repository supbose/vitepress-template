/**
 * @ Author: supbose
 * @ Create Time: 2023-03-15 10:28:51
 * @ Modified by: supbose
 * @ Modified time: 2023-03-16 00:25:46
 * @ Description: qingshu.work
 */

import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')
const version = require('../../package.json').version
// import { getSidebarData, getNavData } from './navSidebarUtil'

import nav from './nav'
import sidebar from './sidebar'
import updateInfo from './watchJson.json'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

console.log(updateInfo)

export default defineConfig({
	lang: 'zh-CN',
	title: '拥抱阳光',
	description:
		'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',

	lastUpdated: true,
	cleanUrls: true,

	head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

	markdown: {
		headers: {
			level: [0, 0]
		},
		lineNumbers: true,
		config: (md) => {
			md.use(mdItCustomAttrs, 'image', {
				'data-fancybox': 'gallery'
			})
		}
	},

	themeConfig: {
		logo: '/logo.png',
		siteTitle: false,
		head: [
			// 添加图标
			['link', { rel: 'icon', href: '/favicon.png' }]
		],
		lastUpdatedText: '最后更新',
		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		},
		outlineTitle: '文档索引',
		outline: 'deep',
		// 启动页面丝滑滚动
		smoothScroll: true,
		nav: nav({ enableDirActiveMatch: true }),
		sidebar: sidebar(),
		// nav: getNavData({ enableDirActiveMatch: true }),
		// sidebar: getSidebarData(),
		// editLink: {
		// 	pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
		// 	text: '编辑'
		// },

		socialLinks: [
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
				},
				link: 'https://git.qingshu.work/qingshu/docs.git'
			}
		],

		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © 2021 by supbose | version:${version} | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备12005073号-3</a>`
		}
	}
})
