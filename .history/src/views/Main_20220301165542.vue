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
import Category from '@c/Category';
import HeaderTail from '@/components/HeaderTail';

export default {
    name: 'Main',
    data() {
        return {};
    },
    components: { Header, Menu, Category },
};
</script>

<style lang="less">
@import '@a/css/base.css';
</style>
