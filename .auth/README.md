# FTP.json 说明文档

## `../.auth/ftp.json` 说明

```json
{
	"host": "127.0.0.1", //ftp服务器地址
	"port": 21, //ftp服务器端口
	"username": "supbose", //ftp服务器用户账号
	"password": "********" //ftp服务器用户密码
}
```

> .`./.auth/ftp.json` 自行创建,如上配置

## 安装插件

- 添加 插件 [@samkirkland/ftp-deploy](https://github.com/SamKirkland/ftp-deploy)

  ```sh
    pnpm add @samkirkland/ftp-deploy -D
  ```

- 项目中添加`ftp.config.js`配置文件

  ```js
  //const { deploy, excludeDefaults } = require('@samkirkland/ftp-deploy')
  //const config = require('../.auth/ftp.json')
  import { deploy, excludeDefaults } from '@samkirkland/ftp-deploy'
  import config from '../../.auth/ftp.json'
  async function deployMyCode() {
  	console.log('🚚 Deploy started')
  	await deploy({
  		server: config.host,
  		username: config.username,
  		password: config.password,
  		'local-dir': './docs/.vitepress/dist/',
  		// 'server-dir': '/',//注释掉就是默认根目录
  		exclude: [...excludeDefaults, 'dontDeployThisFolder/**']
  	})
  	console.log('🚀 Deploy done!')
  }
  deployMyCode()
  ```

## 最后配置`NPM`脚本

```json
"scripts": {
		"docs:dev": "vitepress dev docs",
		"docs:build": "vitepress build docs",
		"ftp": "node --experimental-json-modules ./ftp.config.js",
		// "ftp": "node ./ftp.config.js",
		"cloud": "pnpm docs:build && pnpm ftp"
	}

```

## 到此结束

> 关于`@samkirkland/ftp-deploy`更多配置请查看[@samkirkland/ftp-deploy](https://github.com/SamKirkland/ftp-deploy)
