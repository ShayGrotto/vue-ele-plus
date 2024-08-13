<template>
  <h1 class="title">Ele Plus 组件展示</h1>
  <nav class="nav">
    <RouterLink to="/">Icon</RouterLink>
    <RouterLink to="/button">Button</RouterLink>
    <RouterLink to="/card">Card</RouterLink>
    <RouterLink to="/collapse">Collapse</RouterLink>
    <RouterLink to="/dialog">Dialog</RouterLink>
    <RouterLink to="/dropdown">Dropdown</RouterLink>
    <RouterLink to="/pager">Pager</RouterLink>
    <RouterLink to="/tooltip">Tooltip</RouterLink>
  </nav>

  <div class="displayArea">
    
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>