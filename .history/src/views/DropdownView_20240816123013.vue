<template>
    <div>
        DropdownView
    </div>
</template>

<script setup lang="ts">
import { ref, h } from "vue"
import { type IItem } from "@/components/Dropdown/index.vue";

const dropdownRef = ref<InstanceType<typeof Tooltip> | null>(null)
const options1 = [
{ key: 1, label: 'item1' },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' }
]

const options2 = [
{ key: 1, label: h('div', { class: 'bar', innerHTML: 'hello'}) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' }
]

const visibleChangeHandler = () => {
    console.log("xxx")
}

const selectHandler = (item: IItem) => {
    console.log(`点击的项目为${item.label}`) 
}

const openDropdown = () => {
    dropdownRef.value.show()
}

const closeDropdown = () => {
    dropdownRef.value.hide()
}

</script>

<style scoped>

</style>