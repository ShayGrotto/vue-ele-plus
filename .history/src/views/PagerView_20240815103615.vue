<template>
     <h1 class="row-title">总页数 total 大于 pageCount, 此时无法全部显示</h1>
    <div class="row">
        <Ele-Pager :currentPage="currentPage1" :total="20" :pageCount="10" @current-change="(page: number) => (currentPage1 = page)"/>
    </div>

    <h1 class="row-title">总页数 total 小于 pageCount, 此时全部显示</h1>
    <div class="row">
        <Ele-Pager :currentPage="currentPage2" :total="3" :pageCount="10" @current-change="(page: number) => (currentPage2 = page)"/>
    </div>

    <h1 class="row-title">最大页码显示数 pageCount 可以调整</h1>
    <div class="row">
        <Ele-Pager :currentPage="currentPage3" :total="12" :pageCount="15" @current-change="(page: number) => (currentPage3 = page)" />
    </div>

    <h1 class="row-title">调整主题颜色</h1>
    <div class="row">
        <Ele-Pager :currentPage="currentPage4" :total="20" :pageCount="10" type="danger" @current-change="(page: number) => (currentPage4 = page)"/>
    </div>
    <div class="row">
        <Ele-Pager :currentPage="currentPage5" :total="20" :pageCount="10" type="warning" @current-change="(page: SVGAnimatedNumberList) => (currentPage5 = page)"/>
    </div>

    <h1 class="row-title">调整大小</h1>
    <div class="row">
        <Ele-Pager :currentPage="currentPage6" :total="20" :pageCount="10" size="small" @current-change="(page) => (currentPage6 = page)"/>
    </div>
    <div class="row">
        <Ele-Pager :currentPage="currentPage7" :total="20" :pageCount="10"  @current-change="(page) => (currentPage7 = page)"/>
    </div>
    <div class="row">
        <Ele-Pager :currentPage="currentPage8" :total="20" :pageCount="10" size="large" @current-change="(page) => (currentPage8 = page)"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const currentPage1 = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
const currentPage4 = ref(1)
const currentPage5 = ref(1)
const currentPage6 = ref(1)
const currentPage7 = ref(1)
const currentPage8 = ref(1)

</script>

<style scoped>
.row {
    width: 1000px;
}
</style>