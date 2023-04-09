<template>
    <div class="Article">
        <div class="imgArticle">
            <div v-for="(item, index) in listData " :key="index">
                <a class="items" :href="item.url">
                    <el-avatar :size="88" fit="fill" :src="item.img" @error="errorHandler">
                        <img src="/noImages1.png" class="noimg" />
                    </el-avatar>
                    <div class="font">
                        {{ item.text }}
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { typeListData } from './interface';

const props = defineProps({
    list: {
        type: Object as PropType<typeListData[]>,
        require: true,
        default: () => [{
            url: 'https://www.baidu.com',
            img: 'https://www.baidu.com/img/bd_logo1.png',
            text: '百度一下',
        }]
    }
});
const listData = reactive(props.list)
const errorHandler = () => true
</script>
<style scoped lang="scss">
.Article {
    display: flex;
    justify-content: space-between;
}

.imgArticle {
    display: flex;
    justify-content: space-around;
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
    width: 127px;
    min-width: 50%;
    color: #2c3e50;
    font-weight: 400;

    .noimg {
        width: 88px;
    }

    .font {
        color: var(--vp-c-text-1);
        margin-top: 5px;
    }

}
</style>

