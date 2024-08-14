<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface CollapseProps {
    modelValue?: string[],
    accordion?: boolean,
}

defineOptions({
    name: "Ele-Collapse"
})

withDefaults(defineProps<CollapseProps>(), {
    modelValue: [],
    accordion: false,
})

</script>

<style scoped>

</style>