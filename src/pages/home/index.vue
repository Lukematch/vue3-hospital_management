<template>
  <div class="carousel">
    <Carousel/>
  </div>
  <div class="search">
    <Search/>
  </div>
  <div class="content">
    <el-row gutter:any="20">
      <el-col :span="18">
        <Level/>
        <Region/>
        <div class="card">
          <Card class="item" v-for="item in 10" :keey="item"/>
          <el-pagination
            class="pagination"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout=" prev, pager, next, sizes, total, jumper"
            :total="40"
          />
        </div>
      </el-col>
      <el-col :span="6">4</el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'

import { ref } from 'vue'

let currentPage = ref<number>(1)
let pageSize = ref<number>(10)
</script>

<style scoped>
.carousel{
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 40px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.content{
  margin-top: 60px;
  .card{
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item{
      width: 45%;
    }
    .pagination{
      margin-top: 30px;
    }
  }

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>