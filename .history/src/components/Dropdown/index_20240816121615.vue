<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tooltip from '@/components/Tooltip/index.vue';
import type { TooltipProps } from '@/components/Tooltip/index.vue'
import RenderVNode from '../Common/RenderVNode';

interface DropdownProps extends TooltipProps {
    menuOptions: Array<{
        key: number,
        label: string,
        
    }>
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

const tooltipRef = ref<InstanceType<typeof Tooltip> | null>(null)

const itemClick = (item: any ) => {
    if(item.disabled) return;
    emit('select', item)
    if(props.hideAfterClick) tooltipRef.value?.hide()
}

defineExpose({
    show: () => {
        tooltipRef.value?.show()
    },
    hide: () => {
        tooltipRef.value?.hide()
    }
})

</script>

<style scoped>

</style>