<template>
    <div class="container">
        <div class="menu">
            <a href="#" class="icon-mi"></a>
            <a href="#" class="pic-gif"></a>
            <!-- flex布局 -->
            <div class="header-nav">
                <ul>
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
            <div class="header-search"></div>
        </div>
    </div>
</template>

<script>
import d from '@u/data';

export default {
    data() {
        return {
            navs: [
                { name: '小米手机', type: 'xiaomi' },
                { name: '红米', type: 'red' },
                { name: '平板 · 笔记本', type: 'flats' },
                { name: '电视', type: 'tv' },
                { name: '盒子 · 影音', type: 'box' },
                { name: '路由器', type: 'router' },
                { name: '智能硬件', type: 'hardware' },
                { name: '服务', sourceUrl: '//www.mi.com/service/' },
                { name: '社区', sourceUrl: 'http://www.xiaomi.cn' },
            ],
        };
    },
    methods: {
        evtHeaderEnter(menuType) {
            if (menuType) {
                console.log();
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
</style>
