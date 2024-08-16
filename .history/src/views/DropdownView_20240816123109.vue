<template>
    <h1 class="row-title">基础用法</h1>
    <div class="row">
        <Ele-Dropdown
            placement="bottom"
            trigger = "click"
            :menu-options="options1"
            @visible-change="visibleChangeHandler"
            @select="selectHandler"
        >
            <Ele-Button type="primary">点击打开下拉菜单</Ele-Button>
        </Ele-Dropdown>
    </div>
    <h1 class="row-title">手动触发</h1>
    <div class="row">
        <Ele-Dropdown 
            :menu-options="options1" 
            placement="bottom"
            trigger = "click"
            manual
            @visible-change="visibleChangeHandler"
            @select="selectHandler"
            ref="dropdownRef"
        >
            <Ele-Button type="primary">
                手动打开下里菜单
            </Ele-Button>
        </Ele-Dropdown>
    </div>
    <div class="row">
        <Ele-Button @click="openDropdown">
            打开
        </Ele-Button>
        <Ele-Button @click="closeDropdown">
            关闭
        </Ele-Button>
    </div>
    <h1 class="row-title">支持VNode节点</h1>
    <div class="row">
        <Ele-Dropdown
            placement="bottom"
            trigger = "click"
            :menu-options="options2"
            @visible-change="visibleChangeHandler"
            @select="selectHandler"
        >
            <Ele-Button type="primary">点击打开下拉菜单</Ele-Button>
        </Ele-Dropdown>
    </div>
</template>

<script setup lang="ts">
import { ref, h } from "vue"
import { type IItem } from "@/components/Dropdown/index.vue";
import Tooltip from '@/components/Tooltip/index.vue';

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
    dropdownRef.value?.show()
}

const closeDropdown = () => {
    dropdownRef.value?.hide()
}

</script>

<style scoped>

</style>