<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import  { TooltipProps } from '@/components/Tooltip/index.vue'
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

</script>

<style scoped>

</style>