<template>
  <div class="carousel">
    <Carousel/>
  </div>
  <div class="search">
    <Search/>
  </div>
  <div class="content">
    <el-row gutter:any="20">
      <el-col :span="20">
        <Level/>
        <Region/>
      </el-col>
      <el-col :span="4">4</el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'

</script>

<style scoped>
.carousel{
  margin-top:10px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>