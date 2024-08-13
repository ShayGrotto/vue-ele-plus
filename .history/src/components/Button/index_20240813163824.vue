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
    disable: boolean,
    loading: boolean,
    icon: string,
    disabled: boolean,
}

defineOptions({
    name: "Ele-Button"
})

const props = withDefaults(defineProps<ButtonProps>(), {
    type: "default",
    plain: false,
    
}) 

</script>

<style scoped>

</style>