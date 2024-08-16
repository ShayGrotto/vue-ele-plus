<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TooltipProps } from '@/components/Tooltip/index.vue'
import RenderVNode from '../Common/RenderVNode';

interface DropdownProps extends TooltipProps {
    menuOptions: []
    hideAfterClick?: boolean
}

defineOptions({
    name: "Ele-Dropdown"
})

const props = withDefaults(defineProps<DropdownProps>(), {
    trigger: 'hover',
    placement: 'left',
    manual: false,
    openDelay: 100,
    closeDelay: 100,
    hideAfterClick: false
})

const emit = defineEmits(['select', 'visible-change'])

</script>

<style scoped>

</style>