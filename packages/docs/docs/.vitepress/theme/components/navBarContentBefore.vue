<!--
 * @ 用来判断语言
 * @ Author: supbose
 * @ Create Time: 2023-04-09 20:35:37
 * @ Modified by: supbose
 * @ Modified time: 2023-04-10 00:31:03
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
    } else if (localStorage.getItem('domain') == domain && localStorage.getItem('language') == language) {
        console.log(`..`);
    } else if (language == 'zh-CN') {
        localStorage.setItem('language', language)
        localStorage.setItem('domain', domain)
        location.href = '//vitepress.github.qingshu.work' + page
    } else {
        localStorage.setItem('language', language)
        localStorage.setItem('domain', domain)
        location.href = '//vitepress.panxie.cc' + page
    }
}

</script>