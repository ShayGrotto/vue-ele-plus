<template>
    <div>

    </div>
</template>

<script setup lang="ts">
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