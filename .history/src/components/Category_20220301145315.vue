<template>
    <div class="container clearfix">
        <div class="category">
            <div class="top-side-left">
                <ul class="side-left" @mouseleave="evtSideLeave">
                    <li
                        class="side-item"
                        v-for="item in sideItems"
                        :key="item.name"
                        @mouseenter="evtSideEnter(item.type)"
                    >
                        {{ item.content }}
                    </li>
                </ul>
            </div>
            <div class="site-category-detail" v-show="goodsStatus">
                <!-- 细节区域 -->
                <ul
                    class="category-items"
                    v-for="goods in filterCurrGoods"
                    :key="goods.id"
                >
                    <li
                        class="category-goods"
                        v-for="item in goods"
                        :key="item.id"
                    >
                        <a class="goods-link" :href="item.sourceUrl">
                            <img :src="item.imgUrl" alt="" />
                            <div class="text-name">
                                {{ item.name }}
                            </div>
                        </a>
                        <a
                            class="goods-buy-link"
                            v-show="item.buyStatus"
                            :href="item.buyUrl"
                        >
                            选购
                        </a>
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
    box,
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
            box: [],
            router: [],
            power: [],
            headset: [],
            foil: [],
            line: [],
            bags: [],
            rabbit: [],
        };
    },
    created: function () {
        this.$set(this.$data, 'banners', banners);
        this.$set(this.$data, 'phones', phones);
        this.$set(this.$data, 'computer', computer);
        this.$set(this.$data, 'box', box);
        this.$set(this.$data, 'router', router2);
        this.$set(this.$data, 'power', power);
        this.$set(this.$data, 'headset', headset);
        this.$set(this.$data, 'foil', foil);
        this.$set(this.$data, 'line', line);
        this.$set(this.$data, 'bags', bags);
        this.$set(this.$data, 'rabbit', rabbit);
    },
    methods: {
        evtSideEnter(currType) {
            this.currGoods = this[currType];
            this.goodsStatus = true;
        },
        evtSideLeave() {
            this.goodsStatus = false;
        },
    },
    components: {},
    computed: {
        filterCurrGoods: function () {
            let filterGoods = [[], [], [], [], []];
            this.currGoods.forEach(function (item, index) {
                let goodsIndex = Math.floor(index / 6);
                filterGoods[goodsIndex].push(item);
            });
            return filterGoods;
        },
    },
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

.site-category-detail {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    left: 235px;
    top: 0;
    z-index: 10;
    border: 1px solid #e0e0e0;
    box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.18);
    .category-items {
        width: auto;
        height: 460px;
        margin: 0;
        padding: 0;
        list-style: none;
        background: #fff;
    }
    .category-goods {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        width: 265px;
        height: 76.6px;
        padding: 0 20px 0 20px;
        box-sizing: border-box;
        background: #fff;
        cursor: pointer;
        .goods-link {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            width: 170px;
        }
        .text-name {
            padding-left: 10px;
            font-size: 14px;
        }
        .goods-buy-link {
            display: block;
            width: 58px;
            height: 22px;
            line-height: 24px;
            font-size: 12px;
            text-align: center;
            color: #ff6700;
            border: 1px solid #ff6700;
            &:hover {
                color: #fff;
                background: #ff6700;
            }
        }
    }
}
</style>
