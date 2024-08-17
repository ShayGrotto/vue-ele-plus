<template>
    <div class="ele-card">
        

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