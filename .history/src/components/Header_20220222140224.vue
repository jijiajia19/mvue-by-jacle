<template>
    <div class="container">
        <div class="topbar-nav">
            <ul class="nav-wrap">
                <li
                    v-for="(item, index) in navs"
                    class="nav clearfix"
                    :key="item.name"
                >
                    <template v-if="item.name === '小米商城'">
                        <a :href="item.sourceUrl" class="nav-name">{{
                            item.name
                        }}</a>
                    </template>
                    <template v-else>
                        <a
                            :href="item.sourceUrl"
                            class="nav-name"
                            target="_blank"
                            >{{ item.name }}</a
                        >
                    </template>
                    <span class="nav-separate" v-show="index != 8">|</span>
                </li>
            </ul>
        </div>
        <div class="nav-info"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            navIndex: 0,
            navs: [
                { name: '小米商城', sourceUrl: 'http://www.mi.com/index.html' },
                { name: 'MIUI', sourceUrl: 'http://www.miui.com/' },
                { name: '米聊', sourceUrl: 'http://www.miliao.com/' },
                { name: '游戏', sourceUrl: 'http://game.xiaomi.com/' },
                { name: '多看阅读', sourceUrl: 'http://www.duokan.com/' },
                { name: '云服务', sourceUrl: 'https://i.mi.com/' },
                {
                    name: '小米网移动版',
                    sourceUrl: 'http://www.mi.com/c/appdownload/',
                },
                {
                    name: '问题反馈',
                    sourceUrl: 'http://static.mi.com/feedback/',
                },
                {
                    name: 'Select Region',
                    sourceUrl: 'http://www.mi.com/index.html',
                },
            ],
        };
    },
    components: {},
};
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 40px;
    margin: 0px;
    padding: 0px;
    background: #333;
}

.topbar-nav {
    float: left;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
}

.nav-wrap {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    .nav {
        display: inline-block;
        text-decoration: none;
        height: 40px;
        line-height: 40px;
        padding-left: 5px;
        & :hover {
            color: #fff;
        }
        .nav-name {
            display: inline-block;
            font-size: 12px;
            color: #b0b0b0;
            text-decoration: none;
        }
        .nav-separate {
            display: inline-block;
            color: #b0b0b0;
            margin-left: 5px;
        }
    }
}
</style>
