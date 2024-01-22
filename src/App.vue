<template>
  <div class="container">
    <HospitalTop/>
    <!-- 路由 -->
    <div class="content">
      内容
    </div>
    <div class="bottom">

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
    height: 621px;
    background: #ddd;
  }
  .bottom{
    width: 100%;
    height: 50px;
    background:#fff;
  }
}

</style>
