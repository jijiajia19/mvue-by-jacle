<template>
    <div class="container_headertail">
        <div class="nine">
            <ul>
                <li></li>
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
