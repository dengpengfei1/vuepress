---
sidebar: auto
---
## 安装
* `npm install` 或者 `cnpm install`
* 推荐使用npm5（node.js >= 8.*）

## 使用
* dll(开发模式): `npm run dll`
* dev(开发模式): `npm run dev`
* pro(发布模式): `npm run pro`

## 自定义配置
* 配置文件: `config.custom.js`

## 本地开发配置
* 配置文件: `local.config.js`

## Worker的使用
* 文件命名规范: xxx.worker.js
* 使用: 
	* a.js
	``` js{4}
    import XxxWorker from 'path/to/xxx.worker'
    const wk = new XxxWorker()
    wk.onmessage = (evt) => { ... }
    wk.onerror = (evt) => { ... }
    wk.postMessage(data)
	```
	* xxx.worker.js
	``` js{4}
	onmessage = (evt) => {
	  ...
	  self.postMessage(data)
	  self.close()
	}
	```

## Less变量文件在JS中的使用
* 文件命名规范: xxx.vars.less
* 使用:
	* xxx.vars.less
	``` less{4}
	@color-main: orange;
	```
	* a.js
	``` js{4}
	import lessVars from 'path/to/xxx.vars.less'
	console.log(lessVars) // => {colorMain: 'orange'}
	```