<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { computed, inject} from "vue"
import { collapseItemKey } from "./key"
interface CollapseItemProps {
    name: string
    title: string
    default: boolean
}

defineOptions({
    name: "Ele-CollapseItem"
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseItemKey)

const isActive = computed(() => {
    return collapseContext?.activeNames.value.includes(props.name)
})

const itemHandleClick = () => {
    if(props.disabled) return;
    collapseContext.hnan
}

</script>

<style scoped>

</style>