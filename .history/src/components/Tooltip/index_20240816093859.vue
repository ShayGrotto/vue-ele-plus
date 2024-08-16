<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface TooltipProps {
    content?: string
    trigger?: string
    placement?: string
    manual?: boolean
    openDelay?: number
    closeDelay?: number
}

defineOptions({
    name: "Ele-Tooltip"
})

const props = withDefaults

</script>

<style scoped>

</style>