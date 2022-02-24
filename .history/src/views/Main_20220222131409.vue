<template>
    <div class="main-container"><Header></Header></div>
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
@import '@a/css/base.css';
</style>
