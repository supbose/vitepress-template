let Client = require('ssh2-sftp-client')
let path = require('path')
let client = new Client()
const config = require('../.auth/ftp.json')
const localPath = path.resolve(__dirname, '../docs/.vitepress/dist')
const remotePath = '/www/wwwroot/web.qingshu.work'
const main = async () => {
	try {
		await client.connect(config)
		if (await client.exists(remotePath)) {
			await client.rmdir(remotePath, true)
			console.log('删除成功')
		}
		let rslt = await client.uploadDir(localPath, remotePath)
		console.log('上传成功')
		return rslt
	} finally {
		client.end()
	}
}

main()
