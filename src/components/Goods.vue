<template>
    <!-- 商品展示区域 -->
    <div class="container">
        <TopGoods></TopGoods>
    </div>
</template>

<script>
import TopGoods from '@/components/TopGoods';

export default {
    data() {
        return {};
    },
    components: { TopGoods },
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
