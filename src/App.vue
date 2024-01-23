<template>
  <div class="container">
    <HospitalTop/>
    <!-- 路由 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
    <HospitalBottom/>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 100%;
    height: 639px;
    /* background: #ddd; */
  }
}

</style>
