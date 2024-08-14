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
        _activeNamesArr = [activeNames.value]
    } else {
        const index = _activeNamesArr.indexOf(itemName)
        if(index > -1) {
            _activeNamesArr.splice(index, 1)
        } else {
            _activeNamesArr.push(itemName)
        }
    }

    activeNames.value = _activeNamesArr

    emit('update:modelValue', activeNames.value)
    emit('change', activeNames.value)
}

</script>

<style scoped>

</style>