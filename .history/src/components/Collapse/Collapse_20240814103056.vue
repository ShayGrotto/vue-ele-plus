<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
interface CollapseProps {
    modelValue?: string[],
    accordion?: boolean,
}

defineOptions({
    name: "Ele-Collapse"
})

const props = withDefaults(defineProps<CollapseProps>(), {
    modelValue: [],
    accordion: false,
})

</script>

<style scoped>

</style>