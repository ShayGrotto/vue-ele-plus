<template>
    <h1 class="row-title">第一组</h1>
    <div class="row">
        <!-- 卡片1 -->
        <Ele-Card img-src="./mountain.jpeg" summary="this ia a mountain"/>
        <!-- 卡片2 -->
         <Ele-Card img-src="./fox.jpeg" summary="this ia a fox">
            <template #footer>
                <div class="footer">
                    <div class="name">
                        Fox
                    </div>
                    <div class="age">
                        18
                    </div>
                </div>
            </template>
         </Ele-Card>
    </div>

    <h1 class="row-title">第二组</h1>
    <div class="row">
        <Ele-Card img-src="./deer.jpeg" :width="386" :img-height="90" >
            <div>This is a deer</div>
            <template #footer>
                <div class="footer-info">
                    
                </div>
            </template>
        </Ele-Card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.name {
  color: #9199a1;
  margin-bottom: 8px;
}

.age {
  color: #f01414;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>