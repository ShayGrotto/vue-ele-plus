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



const props = withDefaults(defineProps<CollapseProps>(), {
    modelValue: [],
    accordion: false,
})
const activeNames = ref(props.modelValue)

const emit = defineEmits(["update:modelValue"], 'change')

const handleItemClick = (itemName) => {
    let _activeNamesArr = [...activeNames.value]

    if(props.accordion) {
        _activeNamesArr = [ac]
    }
}

</script>

<style scoped>

</style>