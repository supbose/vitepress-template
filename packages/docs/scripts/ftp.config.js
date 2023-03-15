/**
 * @ Author: supbose
 * @ Create Time: 2023-03-05 00:12:51
 * @ Modified by: supbose
 * @ Modified time: 2023-03-15 11:59:00
 * @ Description: qingshu.work
 */

import { deploy, excludeDefaults } from '@samkirkland/ftp-deploy'
import config from '../../../.auth/ftp.json' assert { type: 'json' }

async function deployMyCode() {
	console.log('🚚 Deploy started')
	await deploy({
		server: config.host,
		username: config.username,
		password: config.password,
		'local-dir': './docs/.vitepress/dist/',
		// 'server-dir': '/',
		exclude: [...excludeDefaults, 'dontDeployThisFolder/**']
	})
	console.log('🚀 Deploy done!')
}

deployMyCode()
