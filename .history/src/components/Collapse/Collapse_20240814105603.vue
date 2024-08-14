<template>
    <div class="ele-collapse">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, type PropType } from "vue"
import { collapseContextKey } from "./key"
interface CollapseProps {
    modelValue?: string[],
    accordion?: boolean,
}

type CollapseContext = {
    activeNames: string[],
    handleItemClick: () => void
}


defineOptions({
    name: "Ele-Collapse"
})



const props = withDefaults(defineProps<CollapseProps>(), {
    modelValue:[],
    accordion: false,
})
const activeNames = ref(props.modelValue)

const emit = defineEmits(["update:modelValue", 'change'])

const handleItemClick = (itemName: string) => {
    let _activeNamesArr = [...activeNames.value]

    if(props.accordion) {
        _activeNamesArr = [activeNames.value[0] === itemName ? '' : itemName]
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

provide<CollapseContext>(collapseContextKey, {
    activeNames,
    handleItemClick
})

</script>

<style scoped>

</style>