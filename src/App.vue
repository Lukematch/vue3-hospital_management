<template>
  <div class="main">
    <!-- <el-scrollbar> -->
      <div class="container">
        <HospitalTop/>
        <!-- 路由 -->
        <div class="content">
          <RouterView></RouterView>
        </div>
        <HospitalBottom/>
      </div>
    <!-- </el-scrollbar> -->
  </div>
  <!-- <el-backtop /> -->
</template>

<script setup lang="ts">
import request from '@/utils/request.ts'
import { onMounted } from 'vue';

onMounted(()=>{
  request.get('/hosp/hospital/1/10').then(res=>{
    console.log(res);
  })
})
</script>

<style scoped>
.main{
  /* /deep/ .el-scrollbar__thumb {
      height: 10px;
  } */
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
}


</style>
