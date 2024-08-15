<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

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

withDefaults(defineProps<PagerProps>(), {
    total: 0,
    pageCount: 10,
    currentPage: 1
})

</script>

<style scoped>

</style>