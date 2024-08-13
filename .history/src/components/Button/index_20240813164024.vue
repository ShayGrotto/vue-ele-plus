<template>
    <button
        ref="_ref"
        class="ele-button"
        :class="{
            [`ele-button--${type}`]: type,
            [`ele-button--${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled || loading
        }"

        :disabled="disabled || loading"
    >   
        <Ele-Icon icon="spinner" spin v-if="loading" />
        <Ele-Icon :icon="icon" v-if="icon" />
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
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
    icon?: string,
    disabled: boolean,
}

defineOptions({
    name: "Ele-Button"
})

const props = withDefaults(defineProps<ButtonProps>(), {
    type: "default",
    plain: false,
    round: false,
    circle: false,
    disable: false,
    loading: false,
    disabled: false,
}) 

const _ref = ref(null)

defineExpose({
    ref: ref
})

</script>

<style scoped>

</style>