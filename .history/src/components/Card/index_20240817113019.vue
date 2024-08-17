<template>
    <div class="ele-card" :style="width ? { width: width + 'px'}: {}">
        <div class="ele-card-img" :style="imagHeight"></div>


    </div>
</template>

<script setup lang="ts">
interface CardProps {
    imgSrc: string
    summary?: string
    width: number
    imagHeight?: number   
}

defineOptions({
    name: "Ele-Card"
})

defineProps<CardProps>()

</script>

<style scoped>

</style>