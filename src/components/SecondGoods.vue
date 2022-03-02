<template>
    <div class="container">
        <div class="goods-top clearfix">
            <h3 class="top-title">搭配</h3>
            <ul class="top-sub">
                <li
                    v-for="sub in subs"
                    :class="{ active: topSubStatus === sub.key }"
                    @mouseenter="topSubEnter(sub.key)"
                    :key="sub.key"
                >
                    {{ sub.name }}
                </li>
            </ul>
        </div>
        <div class="main clearfix">
            <ul class="goods-left">
                <li
                    class="goods-left-item item-top"
                    v-for="goods in leftGoods"
                    :key="goods.name"
                >
                    <a :href="goods.sourceUrl" target="_blank">
                        <img :src="goods.imgUrl" alt="" />
                    </a>
                </li>
            </ul>

            <!-- 右侧 -->
            <div class="goods-right clearfix">
                <ul class="goods-right-content">
                    <template
                        v-for="goods in currGoods"
                        v-if="$index < currGoods.length - 1"
                    >
                        <li class="goods-right-item">
                            <span
                                class="discount-label"
                                :class="goods.discountType"
                                >{{ goods.discount }}</span
                            >
                            <a :href="goods.sourceUrl" target="_blank">
                                <img :src="goods.imgUrl" alt="" />
                                <h3 class="goods-title">{{ goods.title }}</h3>
                            </a>
                            <p class="goods-price">
                                {{ goods.price }}元
                                <span
                                    v-if="goods.discountType === 'discount'"
                                    class="old-price"
                                >
                                    {{ goods.oldPrice }}元
                                </span>
                            </p>
                            <p class="goods-rank">{{ goods.heat }}人评价</p>
                            <div v-show="goods.reviewStatus" class="review">
                                <span class="review-content">{{
                                    goods.reviewDesc
                                }}</span>
                                <span class="review-author"
                                    >来自于{{ goods.reviewAuthor }}的评价</span
                                >
                            </div>
                        </li>
                    </template>
                    <ul class="goods-right-small">
                        <template v-if="lastGoods">
                            <li class="item-small">
                                <a :href="lastGoods.sourceUrl" target="_blank">
                                    <div class="desc">
                                        <h3 class="title">
                                            {{ lastGoods.title }}
                                        </h3>
                                        <span class="price">
                                            {{ lastGoods.price }}元
                                        </span>
                                    </div>
                                    <img
                                        class="small-img"
                                        :src="lastGoods.imgUrl"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li class="item-small read-more">
                                <a :href="lastGoods.moreUrl" target="_blank">
                                    <div class="desc">
                                        <h3 class="title">浏览更多</h3>
                                        <span class="price hot"> 热门 </span>
                                    </div>
                                    <i
                                        class="fa fa-arrow-circle-right fa-4x icon-arrow"
                                    ></i>
                                </a>
                            </li>
                        </template>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { hotGoods, power, headset, battery } from '@u/hotdata';

export default {
    data() {
        return {
            topTitle: '搭配',
            topSubStatus: 'hotGoods',
            hotGoods: [],
            power: [],
            headset: [],
            battery: [],
            subs: [
                { name: '热门', key: 'hotGoods' },
                { name: '耳机音响', key: 'headset' },
                { name: '电源', key: 'power' },
                { name: '电池存储卡', key: 'battery' },
            ],
            leftGoods: [
                {
                    sourceUrl: '//www.mi.com/dianyuan10000/',
                    imgUrl: 'http://i3.mifile.cn/a4/54581b2c-f88d-4415-9754-af83116346bd',
                },
                {
                    sourceUrl: '//www.mi.com/capsuleearphone/',
                    imgUrl: 'http://i3.mifile.cn/a4/f7da6234-7159-414a-a2ea-8832af89b4f1',
                },
            ],
            currGoods: [],
        };
    },
    created: function () {
        this.$set(this.$data, 'hotGoods', hotGoods);
        this.$set(this.$data, 'power', power);
        this.$set(this.$data, 'headset', headset);
        this.$set(this.$data, 'battery', battery);
        this.currGoods = hotGoods;
        console.log('--->', this.currGoods);
    },
    methods: {
        topSubEnter(key) {
            this.topSubStatus = key;
            this.currGoods = this[key];
        },
    },
    components: {},
    computed: {
        lastGoods: function () {
            if (this.currGoods && this.currGoods.length > 0) {
                return this.currGoods[this.currGoods.length - 1];
            } else {
                return null;
            }
        },
    },
};
</script>

<style scoped lang="less">
.main {
    width: 1226px;
    height: auto;
    margin: 0 auto;
}
.container {
    width: 100%;
    height: auto;
    margin: 0 auto;
    background: #f5f5f5;
}

.goods-top {
    position: relative;
    width: 1226px;
    height: 58px;
    margin: 0 auto; //居中对齐
    .top-title {
        float: left;
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
    }
    .top-sub {
        float: right;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        margin-top: 16px;
        color: #424242;
        li {
            width: auto;
            height: 24px;
            line-height: 24px;
            margin-left: 30px;
            cursor: pointer;
            border-bottom: 2px solid #f5f5f5;
            &.active {
                color: #ff6700;
                border-bottom: 2px solid #ff6700;
            }
        }
    }
}
.goods-content {
    width: 1226px;
    height: auto;
    margin: 0 auto;
}

.goods-left {
    float: left;
    width: 234px;
    height: auto;
    .goods-left-item {
        width: 234px;
        height: 300px;
        margin-bottom: 14px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            transform: translateY(-2px);
            box-shadow: 5px 5px 20px #ccc;
        }
        img {
            width: 234px;
            height: 300px;
        }
    }
    .item-bottom {
        margin-top: 14px;
    }
}

.goods-right {
    float: left;
    width: 992px;
    height: 628px;
    .goods-right-content {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
    }
}
</style>
