<template>
    <div class="container clearfix">
        <div class="category">
            <div class="top-side-left">
                <ul class="side-left">
                    <li
                        class="side-item"
                        v-for="item in sideItems"
                        :key="item.name"
                    >
                        {{ item.content }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="slidebar"></div>
    </div>
</template>

<script>
import {
    banners,
    phones,
    computer,
    box2,
    router2,
    power,
    headset,
    foil,
    line,
    bags,
    rabbit,
} from '@u/data';
export default {
    data() {
        return {
            currGoods: [],
            goodsStatus: false,
            sideItems: [
                { type: 'phones', content: '手机 电话卡' },
                { type: 'computer', content: '笔记本 平板' },
                { type: 'box', content: '电视 盒子' },
                { type: 'router', content: '路由器 智能硬件' },
                { type: 'power', content: '移动电源 电池 插线板' },
                { type: 'headset', content: '耳机 音响' },
                { type: 'foil', content: '保护套 贴膜' },
                { type: 'line', content: '线材 支架 存储卡' },
                { type: 'bags', content: '箱包 服饰' },
                { type: 'rabbit', content: '兔米 生活周边' },
            ],
            banners: [],
            phones: [],
            computer: [],
            box2: [],
            router2: [],
            power: [],
            headset: [],
            foil: [],
            line: [],
            bags: [],
            rabbit: [],
        };
    },
    created: function () {
        this.$set(this.$data, 'banners', navs);
        this.$set(this.$data, 'phones', results);
        this.$set(this.$data, 'box', box2);
        this.$set(this.$data, 'router', router2);
        this.$set(this.$data, 'power', power);
        this.$set(this.$data, 'headset', headset);
        this.$set(this.$data, 'foil', foil);
        this.$set(this.$data, 'line', line);
        this.$set(this.$data, 'bags', bags);
        this.$set(this.$data, 'rabbit', rabbit);
    },
    components: {},
};
</script>

<style scoped lang="less">
.container {
    position: relative; /*后面的类目需要参照此坐标 */
    width: 1226px;
    height: auto;
    margin: 0 auto;
}

.category {
    position: absolute;
    left: 0;
    top: 0;
    width: 235px;
    height: auto;
    padding: 20px 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
}

.side-left {
    margin: 0;
    padding: 0;
    width: 235px;
    height: 420px;
    list-style: none;
    .side-item {
        width: 100%;
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        &:hover {
            background: #ff6700;
        }
    }
}
</style>
