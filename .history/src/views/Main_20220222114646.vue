<template>
    <div class="main-container">
        <Header></Header>
    </div>
</template>

<script>
import Header from '@c/Header.vue';

export default {
    name: 'Main',
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
    components: { Header },
};
</script>

<style scoped lang="less">
body {
    margin: 0px;
    width: 100%;
    height: 100%;
}
</style>
