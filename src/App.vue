<template>
  <div class="main">
    <el-scrollbar
     max-height="800px"
     class="scrollbar"
     >
      <div class="container">
        <HospitalTop/>
        <!-- 路由 -->
        <div class="content">
          <RouterView></RouterView>
        </div>
        <HospitalBottom/>
      </div>
    </el-scrollbar>
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
    height: 100%;
    /* background: #ddd; */
  }
}



</style>
