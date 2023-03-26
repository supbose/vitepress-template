<template>
    <div>
        <imagesArticle :list="list"></imagesArticle>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const list = reactive([
    {
        img: 'http://www.masonjs.cn/columns/Html.png',
        text: '易软',
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

)

</script>
