<template>
    <div>
        TooltipView
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tooltipRef = ref(null);
const handle = (isShow) => {
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