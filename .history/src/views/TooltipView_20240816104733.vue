<template>
    <h1 class="row-title">不同方向</h1>
    <div class="row">
        <Ele-Tooltip content="this is a test"  placement="top" @visible-change="handle">
            <Ele-Button type="primary">top</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip content="this is a test" placement="bottom">
            <Ele-Button type="warning">bottom</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip content="this is a test" placement="left">
            <Ele-Button type="danger">left</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip content="this is a test" placement="right">
            <Ele-Button type="success">right</Ele-Button>
        </Ele-Tooltip>
    </div>
    <h1 class="row-title">触发方式</h1>
    <div class="row">
        <Ele-Tooltip content="this is a test"  placement="top" trigger="click">
            <Ele-Button type="primary">top</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip content="this is a test" placement="bottom" trigger="click">
            <Ele-Button type="warning">bottom</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip content="this is a test" placement="left" trigger="click">
            <Ele-Button type="danger">left</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip content="this is a test" placement="right" trigger="click">
            <Ele-Button type="success">right</Ele-Button>
        </Ele-Tooltip>
    </div>

    <h1 class="row-title">手动触发</h1>
    <div class="row">
        <Ele-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
            <Ele-Button type="primary">right</Ele-Button>
        </Ele-Tooltip>
    </div>
    <div class="row">
        <Ele-Button @click="openHandler">打开提示框</Ele-Button>
        <Ele-Button @click="closeHandler">关闭提示框</Ele-Button>
    </div>

    <h1 class="row-title">延时触发</h1>
    <div class="row">
        <Ele-Tooltip
            content="this is a test"
            placement="top"
            :open-delay="1000"
            :close-delay="1000"
            :visible-change="handle"
        >
            <Ele-Button type="primary">top</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip
            content="this is a test"
            placement="bottom"
            :open-delay="1000"
            :close-delay="1000"
           
        >
            <Ele-Button type="success">top</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip
            content="this is a test"
            placement="left"
            :open-delay="1000"
            :close-delay="1000"
            
        >
            <Ele-Button type="warning">top</Ele-Button>
        </Ele-Tooltip>
        <Ele-Tooltip
            content="this is a test"
            placement="right"
            :open-delay="1000"
            :close-delay="1000"
           
        >
            <Ele-Button type="danger">top</Ele-Button>
        </Ele-Tooltip>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tooltipRef = ref(null);
const modal = ref<InstanceType<typeof Ele> | null>(null)
const handle = (isShow: boolean) => {
    if(isShow) console.log("提示框显示")
    else console.log("提示框隐藏") 
}

const openHandler = () => {
    tooltipRef.value.show();
}

const closeHandler = () => {
    tooltipRef.value.hide();
}

</script>

<style scoped>

</style>