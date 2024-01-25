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
          <Card class="item" v-for="(item,index) in hasHospitalArr" :key="index" :hospiltalInfo="item"/>
        </div>
        <el-pagination
            class="pagination"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20]"
            :background="true"
            layout=" prev, pager, next, sizes, total, jumper"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
          />
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

import { onMounted, ref } from 'vue'
import {reqHospital} from '@/api/home'
import type {Content} from '@/api/home/type'
import type {HospitalResponseData} from '@/api/home/type'
// 分页器页码
let currentPage = ref<number>(1)
// 一页显示的数据
let pageSize = ref<number>(10)
// 医院数据
let hasHospitalArr = ref<Content>([])
// 存储医院的总个数
let total = ref(0)

const getHospitalInfo = async ()=>{
  let result:HospitalResponseData = await reqHospital(currentPage.value,pageSize.value)
  // console.log(result);
  if(result.code === 200){
    let hospitalList = result.data.content.filter((item:any)=>(item.bookingRule !== null))
    console.log(hospitalList);
    hasHospitalArr.value = hospitalList
    // 存储医院总个数
    // total.value = hospitalList.length;
    total.value = 17
  }
}
const currentChange = ()=>{
  getHospitalInfo()
}
const sizeChange = ()=>{
  currentPage.value = 1
  getHospitalInfo()
}

onMounted(()=>{
  getHospitalInfo()
})
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
    @media screen and (min-width: 1070px){
      .item{
      width: 45%;
      }
    }
    @media screen and (max-width: 1070px) and (min-width:750px){
      .item{
      width: 60%;
      }
    }
    @media screen and (max-width: 750px){
      .item{
      width: 60%;
      }
    }

  }
  .pagination{
      margin-top: 30px;
      margin-bottom: 30px;
      justify-content: center;
    }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>