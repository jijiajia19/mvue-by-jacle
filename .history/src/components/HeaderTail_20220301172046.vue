<template>
    <div class="container_headertail">
        <div class="nine">
            <ul class="channels">
                <li class="channel">
                    <a href="http://www.mi.com/compare/" target="_blank">
                        <i class="fa fa-mobile fa-fw sub-icon"></i>
                        <p class="channel-txt">选购手机</p>
                    </a>
                </li>
                <div class="line-vertical"></div>
                <li class="channel">
                    <a href="http://qiye.mi.com/" target="_blank">
                        <i class="fa fa-gift fa-fw sub-icon"></i>
                        <p class="channel-txt">企业团购</p>
                    </a>
                </li>
                <div class="line-vertical"></div>
                <li class="channel">
                    <a href="http://item.mi.com/re" target="_blank">
                        <i class="fa fa-refresh fa-fw sub-icon"></i>
                        <p class="channel-txt">官翻产品</p>
                    </a>
                </li>
                <div class="line-horizontal"></div>
                <div class="line-horizontal"></div>
                <div class="line-horizontal"></div>
                <li class="channel">
                    <a
                        href="http://huanxin.mi.com/product/list"
                        target="_blank"
                    >
                        <i class="fa fa-credit-card fa-fw sub-icon"></i>
                        <p class="channel-txt">小米移动</p>
                    </a>
                </li>
                <div class="line-vertical"></div>
                <li class="channel">
                    <a
                        href="http://huanxin.mi.com/product/list"
                        target="_blank"
                    >
                        <i class="fa fa-recycle fa-fw sub-icon"></i>
                        <p class="channel-txt">以旧换新</p>
                    </a>
                </li>
                <div class="line-vertical"></div>
                <li class="channel">
                    <a href="http://recharge.10046.mi.com/" target="_blank">
                        <i class="fa fa-credit-card-alt fa-fw sub-icon"></i>
                        <p class="channel-txt">话费充值</p>
                    </a>
                </li>
            </ul>
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
.container_headertail {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 14px auto 26px;
}

.nine {
    float: left;
    width: 234px;
    height: 170px;
    background: #5f5750;
}

.channels {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 3px;
    .channel {
        width: 75px;
        height: 82px;
        cursor: pointer;
        &:hover {
            .channel-txt {
                color: #fff;
            }
            .sub-icon {
                color: #fff;
            }
        }
        .channel-txt {
            display: block;
            margin: 0;
            width: 75px;
            font-size: 12px;
            text-align: center;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.7);
        }
    }
    .sub-icon {
        width: 75px;
        height: 24px;
        margin-top: 18px;
        margin-bottom: 5px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7);
    }
}
</style>
