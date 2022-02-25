<template>
    <div class="container">
        <div class="menu">
            <a href="#" class="icon-mi"></a>
            <a href="#" class="pic-gif"></a>
            <!-- flex布局 -->
            <div class="header-nav">
                <ul class="navs">
                    <li v-for="item in navs" class="nav" :key="item.id">
                        <template v-if="item.type">
                            <a
                                href="javascript: void(0);"
                                class="nav-item"
                                @mouseenter="evtHeaderEnter(item.type)"
                                @mouseleave="evtHeaderLeave()"
                                >{{ item.name }}</a
                            >
                        </template>
                        <template v-else>
                            <a
                                :href="item.sourceUrl"
                                target="_blank"
                                class="nav-item"
                                >{{ item.name }}</a
                            >
                        </template>
                    </li>
                </ul>
            </div>
            <div class="header-search">
                <!-- 设置消失特效 -->
                <!-- 只控制显示，数据自己控制消失 -->
                <ul transition="fadeOut" class="hot-word" v-show="hotStatus">
                    <li
                        class="hot-item"
                        v-for="item in hotItems"
                        :key="item.index"
                    >
                        {{ item }}
                    </li>
                </ul>
                <input
                    @focus="evtIptFocus"
                    @blur="evtIptBlur"
                    class="search-ipt"
                    type="search"
                    name="search"
                    value=""
                />
                <label class="search-btn" for="search">
                    <i class="icon-search"></i>
                </label>
                <ul class="search-result clearfix">
                    <li v-for="item in results" :key="item.name">
                        <span class="item-name">{{ item.name }}</span>
                        <span class="item-num">约有{{ item.number }}件</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { navs } from '@u/data';
import $ from 'jquery';
//data的key一定要先定义
export default {
    data() {
        return {
            navs: [],
            results:[]
            hotItems: ['红米pro', '小米笔记本air'],
            hotStatus: true,
            headerStatus: false,
            tids: '',
        };
    },
    created: function () {
        //有对象属性赋值
        this.$set(this.$data, 'navs', navs);
        // this.$data.navs = navs;
    },
    methods: {
        evtIptFocus() {
            $('.header-search').addClass('search-active');
            $('.search-result').show();
            this.hotStatus = false;
        },
        evtIptBlur() {
            $('.header-search').removeClass('search-active');
            $('.search-result').hide();
            this.hotStatus = true;
        },
        evtHeaderEnter(menuType) {
            if (menuType) {
                this.currentPhones = this[menuType];
            }
            this.headerStatus = true;
            clearTimeout(this.tids);
        },
        evtHeaderLeave() {
            let self = this;
            this.tids = setTimeout(function () {
                self.headerStatus = false;
            }, 300);
        },
    },
    components: {},
};
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100px;
}

.menu {
    width: 1226px;
    position: relative;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center; /*flow居中布局*/
    height: 100%;
    margin: 0 auto;
}

.icon-mi {
    width: 55px;
    height: 55px;
    background: url('../assets/img/icon-mi.png') no-repeat;
    background-size: 100% 100%;
}

.pic-gif {
    width: 163px;
    height: 66px;
    margin-left: 10px;
    background: url('../assets/img/win.gif') no-repeat;
    background-size: 100% 100%;
}

.header-nav {
    position: relative;
}

.navs {
    height: 88px;
    line-height: 88px;
    margin: 0;
    padding: 0;
    list-style: none;
    .nav {
        display: inline-block;
        .nav-item {
            display: block;
            height: 88px;
            line-height: 88px;
            font-size: 16px;
            padding: 0 10px;
            text-decoration: none;
            color: #333;
            &:hover {
                color: #ff6700;
            }
        }
    }
}

.header-search {
    position: absolute;
    top: 23px;
    right: 0;
    width: 295px;
    height: 50px;
    border: 1px solid #e0e0e0;
    .hot-word {
        position: absolute;
        top: 14px;
        right: 62px;
        z-index: 2;
        text-align: right;
        .hot-item {
            float: left;
            width: auto;
            height: 18px;
            line-height: 18px;
            padding: 0 5px;
            font-size: 12px;
            background: #eee;
            color: #757575;
            margin-right: 5px;
            cursor: pointer;
            &:hover {
                color: #fff;
                background: #ff6300;
            }
        }
    }
}

.fadeOut-transition {
    transition: all 0.3s ease;
    opacity: 1;
}
.fadeOut-enter,
.fadeOut-leave {
    opacity: 0;
}
.search-ipt {
    float: left;
    width: 240px;
    height: 100%;
    border: 0;
    //去除点击之后的显示边框
    outline: none;
}

.search-btn {
    display: block;
    float: right;
    width: 50px;
    height: 100%;
    border-left: 1px solid #e0e0e0;
    cursor: pointer;
    .icon-search {
        display: block;
        width: 20px;
        height: 20px;
        margin-top: 15px;
        margin-left: 15px;
        background: url('../assets/img/icon-search.png') center center no-repeat;
        background-size: 100% 100%;
    }
    &:hover {
        background: #ff6700;
        .icon-search {
            background: url('../assets/img/icon-search-white.png') center center
                no-repeat;
            background-size: 100% 100%;
        }
    }
}

.search-active {
    border: 1px solid #ff6700;
    .search-btn {
        border-left: 1px solid #ff6700;
    }
}

.search-result {
    display: none;
    position: absolute;
    left: -1px;
    top: 50px;
    width: 244px;
    height: auto;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #ff6700;
    z-index: 11;
    background: #fff;
    li {
        padding: 7px 13px;
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        .item-name {
            float: left;
            font-size: 12px;
        }
        .item-num {
            float: right;
            font-size: 10px;
            color: #b0b0b0;
        }
    }
}
</style>
