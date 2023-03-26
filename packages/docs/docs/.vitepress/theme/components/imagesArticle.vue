<template>
    <div class="imgArticle">
        <!-- <Button type="primary">Primary</Button> -->

        <!-- <Avatar :size="88" :style="{ backgroundColor: 'var(--vp-c-bg-soft-up)', color: 'red' }" @error="errorHandler"
            imageUrl="https://www.baidu.com/img/bd_logo1.png">
        </Avatar> -->
        <!-- <Button type="primary">Primary Button</Button> -->


        <div v-for="(item, index) in listData " :key="index">
            <a class="items" :href="item.url">
                <div class="img">
                    <!-- <Avatar :size="88"
                    :style="{ backgroundColor: 'var(--vp-c-bg-soft-up)', color: '#c1c4c79a', padding: '3px' }"
                    @error="errorHandler" :imageUrl="item.img">
                </Avatar> -->
                    <img :src="item.img ?? 'https://www.baidu.com/img/bd_logo1.png'" alt="" mode="scaleToFill">
                </div>
                <div class="font">
                    {{ item.text }}
                </div>
            </a>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { PropType, reactive } from 'vue'


interface typeListData {
    url: string,
    img?: string,
    text: string
}
const props = defineProps({
    list: {
        type: Object as PropType<typeListData[]>,
        require: true,
        default: () => [{
            url: 'https://www.baidu.com',
            img: '/images/logo.png',
            text: '百度一下',
        }]
    }
});
const listData = reactive(props.list)

const errorHandler = () => {
    return true
}
</script>
<style scoped lang="scss">
.imgArticle {
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
    // background-color: #2c3e50;
    // color: #c1c4c79a;
}

.items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 160px;
    min-width: 50%;
    color: #2c3e50;
    font-weight: 400;

    .img {
        width: 88px;
        // max-width: 100%;
        // height: 88px;
        min-height: 88px;
        margin-bottom: 5px;
        border-radius: 50%;
        padding: 10px;
        background-color: var(--vp-c-bg-soft-up);
        overflow: hidden;
    }

    .font {
        color: var(--vp-c-text-1);
        margin-top: 5px;
    }

}
</style>

