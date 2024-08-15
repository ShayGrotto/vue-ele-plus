<template>
     <h1 class="row-title">对话框示例</h1>
   <div class="row">
        <Ele-Button type="primary" @click="visible1 = true">对话框一</Ele-Button>
        <Ele-Button type="primary" @click="visible2 = true">对话框二</Ele-Button>
        <Ele-Button type="primary" @click="visible3 = true">对话框三</Ele-Button>
   </div>
   <!-- 对话框一 -->
   <Ele-Dialog v-model:visible="visible1" title="自定义标题1" @close="visible1 = false">
        这是一个基本对话框
   </Ele-Dialog>

   <!-- 对话框二 -->
   <Ele-Dialog v-model:visible="visible2" title="自定义标题2" @close="visible2 = false" width="30vw" top="40vh">
        这是一个基本对话框
    </Ele-Dialog>

   <!-- 对话框三 -->
   <Ele-Dialog v-model:visible="visible3" title="自定义标题3" @close="visible3 = false">
       这是一个基本对话框
       <template #footer>
        <Ele-Button type="primary" @click="visible3 = false">确定</Ele-Button>
        <Ele-Button @click="visible3 = false">取消</Ele-Button>
       </template>
   </Ele-Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

</script>

<style scoped>

</style>