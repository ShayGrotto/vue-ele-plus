<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { computed, inject} from "vue"
import { collapseItemKey } from "./key"
interface CollapseItemProps {
    name: string
    title: string
    default: boolean
}

defineOptions({
    name: "Ele-CollapseItem"
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseItemKey)

const isActive = computed(() => {
    return collapseContext?.activeNames.value.includes(props.name)
})

const itemHandleClick = () => {
    if(props.disabled) return;
    collapseContext.handleItemClick(props.name)
}

const transitionEvents = {
    beforeEnter(el) {
        el.style.height = '0px'
        el.style.overflow = 'hidden'
    },
    enter(el) {
        el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el) {
        el.style.height = "",
        el.style.overflow = ""
    },
    beforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
    },
    leave(el) {
        el.style.height = "0px";
    },
    afterLeave(el) {
        el.style.height = "",
        el.style.overflow = ""
    }
}

</script>

<style scoped>

</style>