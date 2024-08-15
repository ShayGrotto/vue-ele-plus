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
    visible: false,
    width: "50%",
    top: "15vh",
    title: "提示"
})
</script>

<style scoped>

</style>