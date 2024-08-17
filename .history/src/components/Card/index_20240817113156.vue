<template>
     <!-- 这是最外层容器，会有一个默认的宽度 270px，但是如果用户传递的宽度，那么就使用用户传递的 -->
    <div class="ele-card" :style="width ? { width: width + 'px'}: {}">
        <!-- 1. 卡片图片 -->
        <div class="ele-card-img" :style="imgHeight ? { height: imgHeight + 'px'}: {}">
            <img :src="imgSrc" alt="img" />
        </div>
        <!-- 2. 卡片描述 -->
         <div class="ele-card-summary">
            
         </div>

    </div>
</template>

<script setup lang="ts">
interface CardProps {
    imgSrc: string
    summary?: string
    width: number
    imgHeight?: number   
}

defineOptions({
    name: "Ele-Card"
})

defineProps<CardProps>()

</script>

<style scoped>

</style>