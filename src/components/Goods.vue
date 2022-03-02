<template>
    <!-- 商品展示区域 -->
    <div class="container">
        <TopGoods></TopGoods>
        <SecondGoods></SecondGoods>
    </div>
</template>

<script>
import TopGoods from '@/components/TopGoods';
import SecondGoods from '@/components/SecondGoods';

export default {
    data() {
        return {};
    },
    components: { TopGoods, SecondGoods },
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
