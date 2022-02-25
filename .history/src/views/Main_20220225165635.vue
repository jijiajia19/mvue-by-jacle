<template>
    <div class="main-container">
        <Header></Header>
        <Menu></Menu>
        <Category></Category>
    </div>
</template>

<script>
import Header from '@c/Header.vue';
import Menu from '@c/Menu.vue';
import Category from '@/components/Category';

export default {
    name: 'Main',
    data() {
        return {};
    },
    components: { Header, Menu },
};
</script>

<style lang="less">
@import '@a/css/base.css';
</style>
