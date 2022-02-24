<template>
    <div class="container">
        <div class="menu">
            <a href="#" class="icon-mi"></a>
            <a href="#" class="pic-gif"></a>
            <!-- flex布局 -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
};
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100%;
}

.menu {
    width: 1226px;
    position: relative;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin: 0 auto;
}
</style>
