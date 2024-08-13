<template>
     <i class="ele-icon" :class="{[`ele-icon--${type}`]: type}">
        <font-awesome-icon  v-bind="filterProps" />
    </i>   
</template>

<script setup lang="ts">
import { computed } from "vue"
import { omit } from "lodash-es"
interface IconProps {
    // 图标
    icon: string,
    // 大小
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

const props =  defineProps<IconProps>()

const filterProps = computed(() => omit(props, ['type']) )

</script>

<style scoped>

</style>