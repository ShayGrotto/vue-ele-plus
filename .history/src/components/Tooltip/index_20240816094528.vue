<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { createPopper } from "@popperjs/core"
import { debounce } from 'lodash-es';

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

const emit = defineEmits(['visible-change'])

const isOpen = ref(false)

//存储触发元素
const triggerRef = ref(null)
//存储提示框元素
const popperRef = ref(null)

let popperInstance = null;

</script>

<style scoped>

</style>