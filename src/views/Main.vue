<template>
    <div class="main-container">
        <Header></Header>
        <Menu></Menu>
        <Category></Category>
        <HeaderTail></HeaderTail>
        <Goods></Goods>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@c/Header.vue';
import Menu from '@c/Menu.vue';
import Category from '@c/Category';
import HeaderTail from '@c/HeaderTail';
import Goods from '@c/Goods.vue';
import Footer from '@/components/Footer';

export default {
    name: 'Main',
    data() {
        return {};
    },
    components: { Header, Menu, Category, HeaderTail, Goods, Footer },
};
</script>

<style lang="less">
@import '@a/css/base.css';
</style>
