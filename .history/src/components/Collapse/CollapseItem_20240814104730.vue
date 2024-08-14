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

const collapseContext = inject(collapseItemKey) = inject(collapseItemKey)

</script>

<style scoped>

</style>