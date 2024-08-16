<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref, type  } from 'vue';
import type { Component } from "vue"
import Tooltip from '@/components/Tooltip/index.vue';
import type { TooltipProps } from '@/components/Tooltip/index.vue'
import RenderVNode from '../Common/RenderVNode';

type Children = string | number | boolean | VNode | null | Children[]
type Slot = () => Children
type Slots = { [name: string]: Slot }

type hFunc(type: string | Component, children?: Children | Slot) => VNode

interface IItem {
    key: number,
    label: string | hFunc,
    divided?: boolean,
    disabled?: boolean,
    onClick?: (item: IItem) => void
}

interface DropdownProps extends TooltipProps {
    menuOptions: Array<IItem>
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

const itemClick = (item: IItem ) => {
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