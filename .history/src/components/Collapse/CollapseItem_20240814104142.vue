<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { computed, inject} from "vue"
interface CollapseItemProps {
    name: string
    title: string
    default: boolean
}

defineOptions({
    name: "Ele-CollapseItem"
})

const props = defineProps<CollapseItemProps>()

</script>

<style scoped>

</style>