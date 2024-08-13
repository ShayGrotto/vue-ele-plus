<template>
     <h1 class="row-title">普通引入</h1>
    <div class="row">
        <Ele-Icon icon="user-secret" />
        <Ele-Icon icon="bars" />
        <Ele-Icon icon="shield-halved" />
        <Ele-Icon icon="file" />
        <Ele-Icon icon="filter" />
        <Ele-Icon icon="gear" />
        <Ele-Icon icon="barcode" />
        <Ele-Icon icon="folder" />
        <Ele-Icon icon="folder-open" />
    </div>

    <h1 class="row-title">设置不同大小</h1>
    <div class="row">
        <Ele-Icon icon="user-secret" size="2xs" />
    <Ele-Icon icon="bars" size="xs" />
    <Ele-Icon icon="shield-halved" size="sm" />
    <Ele-Icon icon="file" size="lg" />
    <Ele-Icon icon="filter" size="xl" />
    <Ele-Icon icon="gear" size="2xl" />
    <Ele-Icon icon="barcode" size="2x" />
    <Ele-Icon icon="folder" size="3x" />
    <Ele-Icon icon="folder-open" size="4x" />
    </div>
    <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <Ele-Icon icon="user-secret" rotation="90" size="xl" />
    <Ele-Icon icon="bars" rotation="270" size="xl" />
    <Ele-Icon icon="shield-halved" rotation="180" size="xl" />
    <Ele-Icon icon="file" flip="horizontal" size="xl" />
    <Ele-Icon icon="filter" flip="vertical" size="xl" />
    <Ele-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <Ele-Icon icon="user-secret" size="xl" beat />
    <Ele-Icon icon="bars" size="xl" beat-fade />
    <Ele-Icon icon="shield-halved" size="xl" bounce />
    <Ele-Icon icon="file" size="xl" fade />
    <Ele-Icon icon="filter" size="xl" flip />
    <Ele-Icon icon="gear" size="xl" shake />
    <Ele-Icon icon="barcode" size="xl" spin />
    <Ele-Icon icon="folder" size="xl" spin spin-reverse />
    <Ele-Icon icon="folder-open" size="xl" spin-pulse />
  </div>

  <h1 class="row-title">添加自定义效果</h1>
  <div class="row">
    <Ele-Icon icon="user-secret" size="xl" type="primary" />
    <Ele-Icon icon="bars" size="xl" type="success" />
    <Ele-Icon icon="shield-halved" size="xl" type="info" />
    <Ele-Icon icon="file" size="xl" type="warning" />
    <Ele-Icon icon="filter" size="xl" type="danger" />
    <Ele-Icon icon="gear" size="xl" color="#e47412" />
    <Ele-Icon icon="barcode" size="xl" color="#7ec102" />
    <Ele-Icon icon="folder" size="xl" color="skyblue" />
    <Ele-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>