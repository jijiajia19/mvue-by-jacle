<template>
    <!-- 商品展示区域 -->
    <div class="container">
        <TopGoods></TopGoods>
        <SecondGoods></SecondGoods>
        <Three></Three>
        <Four></Four>
    </div>
</template>

<script>
import TopGoods from '@/components/TopGoods';
import SecondGoods from '@/components/SecondGoods';
import Three from '@/components/Three';
import Four from '@c/Four';

export default {
    data() {
        return {};
    },
    components: { TopGoods, SecondGoods, Three, Four },
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
