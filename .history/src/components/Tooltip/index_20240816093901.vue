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

const props = withDefaults(defineProps<TooltipProps>(), {
    content: '',
    trigger: 'hover',
    placement: 'top',
    manual: false,
    openDelay: 0,
    closeDelay: 0
}))

</script>

<style scoped>

</style>