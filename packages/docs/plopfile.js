// plop 的入口文件
// 需要导出一个函数，函数接收一个plop对象，用于创建生成器任务

import { relative } from 'path'
import { readdirSync, lstatSync } from 'fs'
import chalk from 'chalk'
const error = chalk.bold.red
const warning = chalk.hex('#FFA500')
const DocsFolder = 'docs/articles'
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
  let s = getFolder(DocsFolder)
  s.unshift(DocsFolder)
  // console.log(s)
  return s
}

export default (plop) => {
  plop.setWelcomeMessage('请选择需要创建的模式：')
  // setGenerator可以设置一个生成器，每个生成器都可用于生成特定的文件
  // 接收两个参数，生成器的名称和配置选项

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
        validate: (v) => {
          if (!v || v.trim === '') {
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

  plop.setGenerator('table-page', {
    description: '创建一个表格页面',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: '请选择页面创建目录',
        choices: getFolderAdd,
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入页面文件名称',
        validate: (v) => {
          if (!v || v.trim === '') {
            return '文件名不能为空'
          } else {
            return true
          }
        },
      },
    ],
    actions: (data) => {
      let relativePath = relative(DocsFolder, data.path)
      const actions = [
        {
          type: 'add',
          path: `${data.path}/{{name}}.vue`,
          templateFile: 'plop-templates/docs.hbs',
          data: {
            componentName: `${relativePath} ${data.name}`,
          },
        },
      ]
      return actions
    },
  })

  plop.setGenerator('component', {
    description: '创建组件',
    prompts: [
      {
        type: 'confirm',
        name: 'isGlobal',
        message: '是否为全局组件',
        default: true,
      },
      {
        type: 'list',
        name: 'path',
        message: '请选择组件创建目录',
        choices: getFolderAdd,
        when: (answers) => {
          return !answers.isGlobal
        },
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称',
        validate: (v) => {
          if (!v || v.trim === '') {
            return '组件名称不能为空'
          } else {
            return true
          }
        },
      },
    ],
    actions: (data) => {
      let path = ''
      if (data.isGlobal) {
        path = 'src/components/{{properCase name}}/index.vue'
      } else {
        path = `${data.path}/components/{{properCase name}}/index.vue`
      }
      const actions = [
        {
          type: 'add',
          path: path,
          templateFile: 'plop-templates/component.hbs',
        },
      ]
      return actions
    },
  })
}
