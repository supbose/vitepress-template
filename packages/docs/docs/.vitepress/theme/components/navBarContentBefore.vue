<!--
 * @ 用来判断语言
 * @ Author: supbose
 * @ Create Time: 2023-04-09 20:35:37
 * @ Modified by: supbose
 * @ Modified time: 2023-04-10 00:04:13
 * @ Description: qingshu.work
 -->


<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
    pageTo()
})
const pageTo = () => {
    let language = navigator.language
    let domain = document.location.hostname
    let page = window.location.pathname
    if (domain == 'localhost') {
        console.log(document.location);
        console.log(window.location);

    } else if (language == 'zh-CN') {
        location.href = '//vitepress.github.qingshu.work/' + page
    } else {
        //location.href = '//www.yiruan.wang' + page
    }
}

</script>