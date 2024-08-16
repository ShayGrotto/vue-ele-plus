<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { TooltipProps } from '@/components/Tooltip/index.vue'
interface DropdownProps extends TooltipProps {
    menuOptions: []
    hideAfterClick
}

defineOptions({
    name: "Ele-Dropdown"
})
</script>

<style scoped>

</style>