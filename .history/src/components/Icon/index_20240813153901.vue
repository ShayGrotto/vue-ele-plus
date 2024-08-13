<template>
    <div>

    </div>
</template>

<script setup lang="ts">
export interface IconProps {
    icon: string,
    size?: string,
    rotation?: string,
    flip?: string,

    //动画效果相关属性
    beat?: boolean,
    'beat-fade'?: boolean,
    bounce?: boolean,
    fade?: boolean,
    shake?: boolean,
    spin?: boolean,
    
}

defineOptions({
    name: "Ele-Icon"
})
</script>

<style scoped>

</style>