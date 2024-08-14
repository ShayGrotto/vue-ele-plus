<template>
    <div class="ele-collapse">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue"
interface CollapseProps {
    modelValue?: string[],
    accordion?: boolean,
}

defineOptions({
    name: "Ele-Collapse"
})

const active

const props = withDefaults(defineProps<CollapseProps>(), {
    modelValue: [],
    accordion: false,
})

const emit = defineEmits(["update:modelValue"], 'change')

const handleItemClick = (itemName) => {

}

</script>

<style scoped>

</style>