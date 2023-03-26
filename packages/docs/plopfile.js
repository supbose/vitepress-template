// plop 的入口文件
// 需要导出一个函数，函数接收一个plop对象，用于创建生成器任务

import { relative } from 'path'
import { readdirSync, lstatSync } from 'fs'
import chalk from 'chalk'

const error = chalk.bold.red
const warning = chalk.hex('#FFA500')
const DocsFolder = 'docs/articles'
const previewDemoFolder = 'docs/demos'
function getFolder(path) {
  let components = []
  const files = readdirSync(path)
  files.forEach(function (item) {
    let stat = lstatSync(path + '/' + item)
    if (stat.isDirectory() === true && item !== 'components') {
      components.push(path + '/' + item)
      components.push.apply(components, getFolder(path + '/' + item))
    }
  })
  return components
}

const getFolderAdd = () => {
  let Folder = getFolder(DocsFolder)
  Folder.unshift(DocsFolder)

  return Folder
}
const getFolderAddpreviewDemo = () => {
  let Folder = getFolder(previewDemoFolder)
  Folder.unshift(previewDemoFolder)
  return Folder
}
let reg = new RegExp('^[a-zA-Z0-9\u4e00-\u9fa5\u0800-\u4e00]+$')

export default (plop) => {
  plop.setWelcomeMessage('请选择需要创建的模式：')
  plop.setGenerator('create Markdown documents', {
    // 生成器的描述
    description: '创建Markdown文件',
    // 命令行提示
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: '请选择文档所创建的目录',
        choices: getFolderAdd,
      },
      {
        type: 'input',
        name: 'name', // 接收变量的参数
        message: '请输入Markdown文件名称',
        default: '目录名/文档名 或者 直接文档名',
        validate: (value) => {
          if (!value || value.trim === '') {
            return '文件名不能为空'
          } else {
            return true
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: '是否创建',
        default: false,
        value: 'confirm',
      },
    ],
    // 完成命令行后执行的操作，每个对象都是动作对象
    actions: (data) => {
      if (data.confirm == false) {
        console.log(
          `${error('[取消创建]')} ${warning('Markdown文档')} -> ${data.name} `
        )
        return
      }
      let relativePath = relative(DocsFolder, data.path)
      const actions = [
        {
          type: 'add', // 动作类型
          path: `${data.path}/{{name}}.md`, // 生成文件的输出路径
          templateFile: 'plop-templates/docs.hbs', // template 模板的文件路径，目录下的文件遵循hbs的语法规则
          data: {
            componentName: `${relativePath} ${data.name}`,
          },
          abortOnFail: true,
        },
      ]
      return actions
    },
  })

  plop.setGenerator('Create Preview Demo', {
    description: '创建previewDemo',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: '请选择预览组件的创建目录',
        choices: [previewDemoFolder], //getFolderAddpreviewDemo,
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入创建previewDemo名称',
        validate: (value) => {
          if (!reg.test(value)) {
            return `${error('[ERROR]')} ${warning('不能输入非法字符')}` //'不能输入非法字符'
          } else {
            return true
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: '是否创建',
        default: false,
        value: 'confirm',
      },
    ],
    actions: (data) => {
      if (data.confirm == false) {
        console.log(
          `${error('[取消创建]')} ${warning('previewDemo')} -> ${data.name} `
        )
        return
      }
      let relativePath = relative(previewDemoFolder, data.path)
      const actions = [
        {
          type: 'add',
          path: `${data.path}/{{name}}.vue`,
          templateFile: 'plop-templates/previewDemo.hbs',
          data: {
            componentName: `${relativePath} ${data.name}`,
          },
        },
        {
          type: 'add',
          path: `${data.path}/css/{{name}}.css`,
          templateFile: 'plop-templates/previewDemo-css.hbs',
          data: {
            componentName: `${relativePath} ${data.name}`,
          },
        },
        {
          type: 'add',
          path: `${data.path}/types/{{name}}.d.ts`,
          templateFile: 'plop-templates/previewDemo-d-ts.hbs',
          data: {
            componentName: `${relativePath} ${data.name}`,
          },
        },
      ]
      return actions
    },
  })
}
