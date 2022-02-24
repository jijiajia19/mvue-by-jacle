<template>
    <div class="container">
        <div>
            <ul class="nav-wrap">
                <li v-for="item in navs" class="nav clearfix" :key="id"></li>
            </ul>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
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
</style>
