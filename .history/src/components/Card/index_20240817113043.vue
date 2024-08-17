<template>
    <div class="ele-card" :style="width ? { width: width + 'px'}: {}">
        <div class="ele-card-img" :style="imgHeight ? { height: imgHeight + 'px'}: {}"></div>


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