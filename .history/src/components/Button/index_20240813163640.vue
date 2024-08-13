<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface ButtonProps {
    type: string,
    size?: string,
    plain: boolean,
    round: boolean,
    circle: boolean,
    disabled: boolean,
    loading: boolean
}

defineOptions({
    name: "Ele-Button"
})
</script>

<style scoped>

</style>