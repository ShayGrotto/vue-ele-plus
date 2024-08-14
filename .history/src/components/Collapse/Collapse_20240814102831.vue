<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface CollapseProps {
    modelValue: string[],
    accordion boolean,
}

defineOptions({
    name: "Ele-Collapse"
})

defineProps<CollapseProps>()
</script>

<style scoped>

</style>