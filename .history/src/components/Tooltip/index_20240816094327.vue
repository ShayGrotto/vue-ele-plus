<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { createPopper } from "@popperjs/core"

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
    trigger: 'hover',
    placement: 'left',
    manual: false,
    openDelay: 100,
    closeDelay: 100
})

</script>

<style scoped>

</style>