---
title: 收藏夹/index
editLink: true
lastUpdated: false
aside: false
sidebar: false
docFooter: false
tags:
  - 收藏夹/index
author:
name: supbose
link: https://github.com/supbose
---

# Docs 生成模版收藏夹/index

[掘金](https://juejin.cn/)

<imagesArticle :list="list"></imagesArticle>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const list = reactive([
    {
        img: 'http://www.masonjs.cn/columns/Html.png',
        text: '易软',
        url: '/pages/index'
    },
    {
        img: 'https://img.anfensi.com/upload/2021-11/20211151554522506.png',
        text: '掘金',
        url: 'https://juejin.cn/'
    }
    ,
    {
        img: '/images/logo1.png',
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

)

</script>
