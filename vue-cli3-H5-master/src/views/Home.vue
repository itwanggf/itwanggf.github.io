<template>
    <div class="home">
        <ul>
            <li>
                <div>vue插件之vue-baidu-map</div>
                <div>发表于 2018-04-10 |  分类于 vue |  阅读次数: 781</div>
                <p>1、引入vue-baidu-map
                npm install vue-baidu-map --save

                2、项目中使用vue-baidu-map组件
                我这里需求只有一个地图显示，故采用局部引用了，直接在需要使用的组件里面
                import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
                伪代码如下：</p>
                <div>阅读全文 »</div>
            </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getIndex } from 'api/index';
export default {
    name: 'home',
    components: {
        HelloWorld
    },
    created() {
        getIndex({ pageSiza: 100, num: 10 });
        // console.log(this.$wechat)
    },
    mounted() {},

    methods: {}
};
</script>
