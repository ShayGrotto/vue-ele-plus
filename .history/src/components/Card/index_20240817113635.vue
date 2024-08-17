<template>
     <!-- 这是最外层容器，会有一个默认的宽度 270px，但是如果用户传递的宽度，那么就使用用户传递的 -->
    <div class="ele-card" :style="width ? { width: width + 'px'}: {}">
        <!-- 1. 卡片图片 -->
        <div class="ele-card-img" :style="imgHeight ? { height: imgHeight + 'px'}: {}">
            <img :src="imgSrc" alt="img" />
        </div>
        <!-- 2. 卡片描述 -->
         <div v-if="summary" class="ele-card-summary">
            {{ summary }}
         </div>
         <div v-else class="ele-card-summary">
            <slot />
         </div>

        <!-- 3. 卡片的 footer -->
        <!-- 最后的 footer 仅仅提供一个插槽，至于内容以及样式由用户自己来决定 -->

    </div>
</template>

<script setup lang="ts">
interface CardProps {
    imgSrc: string
    summary?: string
    width?: number
    imgHeight?: number   
}

defineOptions({
    name: "Ele-Card"
})

defineProps<CardProps>()

</script>

<style scoped>

</style>