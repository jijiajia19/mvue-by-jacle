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
        return {};
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
