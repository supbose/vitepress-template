---
title: EleimagesArticle
editLink: true
lastUpdated: false
sidebar: true
docFooter: false
tags:
  - EleimagesArticle
author:
name: supbose
link: https://github.com/supbose
---

# EleimagesArticle 组件使用

::: warning 友情提示

> 一般用在根目录`index.md`文件中使用
> `sidebar`设置为`false`

:::

<EleimagesArticle :list="listImagesArticle"></EleimagesArticle>

```md
---
title: EleimagesArticle
editLink: true
lastUpdated: false
sidebar: true
docFooter: false
tags:
  - EleimagesArticle
author:
name: supbose
link: https://github.com/supbose
---

<EleimagesArticle :list="listImagesArticle"></EleimagesArticle>

<script>
const listImagesArticle = [
    {
        img: 'http://www.masonjs.cn/columns/Html.png',
        text: 'H5',
        url: '/pages/index'
    },
    {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        text: '易软',
        url: '/pages/index'
    }
    ,
    {
        // img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }
    ,
    {
        img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }
    ,
    {
        img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }

]
</script>
```

## 基本使用

<preview path="../../../demos/EleimagesArticle.vue" title="基本使用" description=""></preview>

## 多个使用

:::preview 多个使用 || 多个使用

demo-preview=../../../demos/EleimagesArticleList.vue

:::

<script>
const listImagesArticle = [
    {
        img: 'http://www.masonjs.cn/columns/Html.png',
        text: 'H5',
        url: '/pages/index'
    },
    {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        text: '易软',
        url: '/pages/index'
    }
    ,
    {
        // img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }
    ,
    {
        img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }
    ,
    {
        img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }

]
</script>
