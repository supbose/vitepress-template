---
title: imagesArticle
editLink: true
lastUpdated: false
sidebar: true
docFooter: false
tags:
  - imagesArticle
author:
name: supbose
link: https://github.com/supbose
---

# imagesArticle 组件使用

::: warning 友情提示

> 一般用在根目录`index.md`文件中使用
> `sidebar`设置为`false`

:::

<imagesArticle :list="listImagesArticle"></imagesArticle>

## 基本使用

<preview path="../../../demos/imagesArticle.vue" title="基本使用" description=""></preview>

## 多个使用

:::preview 多个使用 || 多个使用

demo-preview=../../../demos/imagesArticleList.vue

:::

<script>
const listImagesArticle = [
    {
        img: 'http://www.masonjs.cn/columns/Html.png',
        text: 'H5',
        url: '/pages/index'
    },
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
    ,
    {
        img: '/images/logo.png',
        text: '易软',
        url: '/pages/index'
    }

]
</script>
