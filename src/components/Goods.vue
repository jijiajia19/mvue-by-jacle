<template>
    <!-- 商品展示区域 -->
    <div class="container">
        <TopGoods></TopGoods>
        <SecondGoods></SecondGoods>
        <Three></Three>
        <Four></Four>
        <recommend></recommend>
        <HotProduct></HotProduct>
        <Content></Content>
        <Video></Video>
    </div>
</template>

<script>
import TopGoods from '@/components/TopGoods';
import SecondGoods from '@/components/SecondGoods';
import Three from '@/components/Three';
import Four from '@c/Four';
import recommend from '@c/recommend';
import HotProduct from '@/components/HotProduct';
import Content from '@/components/Content';
import Video from '@/components/Video';

export default {
    data() {
        return {};
    },
    components: {
        TopGoods,
        SecondGoods,
        Three,
        Four,
        recommend,
        HotProduct,
        Content,
        Video,
    },
    methods: {},
};
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: auto;
    background: #f5f5f5;
    padding-bottom: 40px;
}
</style>
