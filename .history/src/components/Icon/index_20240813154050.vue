<template>
    <div>

    </div>
</template>

<script setup lang="ts">
export interface IconProps {
    // 图标
    icon: string,
    大小
    size?: string,
    // 旋转
    rotation?: string,
    // 翻转
    flip?: string,

    //动画效果相关属性
    beat?: boolean,
    'beat-fade'?: boolean,
    bounce?: boolean,
    fade?: boolean,
    shake?: boolean,
    spin?: boolean,
    'spin-reverse'?: boolean,
    'spin-pluse'?: boolean,

    //自定义属性
    type: string,
    color: string
}

defineOptions({
    name: "Ele-Icon"
})

definePropsM<IconProps>()

</script>

<style scoped>

</style>