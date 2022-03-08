<template>
    <div class="container">
        <div class="header">
            <h3 class="top-title">{{ title }}</h3>
        </div>
        <div class="content">
            <!-- 分组内容 -->
            <ul class="items">
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { title: '内容' };
    },
    components: {},
};
</script>

<style scoped lang="less">
.container {
    width: 1226px !important;
    height: auto;
    margin: 0 auto;
}

.header {
    width: 1226px;
}

.top-title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
}

.item {
    width: 296px;
    height: 421px;
    border: 1px solid gray;
    //浮动会脱离文本流
    // display: inline;
    // float: left;
    //使用flex布局
}

.items {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
</style>
