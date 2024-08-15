<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface PagerProps {
    total?: number
    pageCount?: number
    currentPage?: number
    type?: string
    size?: string
}

defineOptions({
    name: "Ele-Pager"
})

withDefaults(defineProps<PagerProps>(), {})

</script>

<style scoped>

</style>