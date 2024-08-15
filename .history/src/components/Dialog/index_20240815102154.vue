<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface DialogProps {
    visible?: boolean
    width?: string
    top?: string
    title?: string
}

defineOptions({
    name: "Ele-Dialog"
})

withDefaults(defineProps<DialogProps>(), {
    visible?
})
</script>

<style scoped>

</style>