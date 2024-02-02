<template>
  <div v-if="hoscode" class="container">
  <h1>选择科室</h1>
  <el-container style="height: 565px;width: 900px;">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item v-for="item in departmentList" :key="item.depcode" :index="item.depcode">{{ item.depname }}</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-main>
        <el-scrollbar>
         <div v-for="i in departmentList" :key="i.depcode" class="depart">
          <div class="title">
            <el-icon><PriceTag /></el-icon>
            <h2>{{ i.depname }}</h2>
          </div>
          <ul>
            <li v-for="j in i.children" :key="j.depcode">{{ j.depname }}</li>
          </ul>
        </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  </div>
  <div v-else>
    <el-empty description="暂无数据" />
  </div>
</template>

<script setup lang='ts'>
import { reqDepartment } from '@/api/hospital';
import { DepartmentList } from '@/api/hospital/type';
import { onMounted, ref } from 'vue';
import { defineProps } from 'vue';
import { PriceTag } from '@element-plus/icons-vue'


let departmentList = <any>ref([])

const {hoscode} = defineProps(['hoscode'])

const getDepartment = async()=>{
  let { data }:DepartmentList = await reqDepartment(hoscode)
  console.log(data);
  departmentList.value = data
}

onMounted(()=>{
  getDepartment()
})


</script>

<style scoped>
.container {
  margin-top:60px;
  margin-bottom: 30px;
  /* display: flex;
  flex: wrap; */
  h1{
    letter-spacing: 1px;
    font-weight: 700;
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .el-aside {
    width: 150px;
    color: var(--el-text-color-primary);
  }
  .el-main {
    .depart{
      .title{
        display: flex;
        margin-bottom: 10px;
        .el-icon{
          color: #7f7f7f;
        }
        h2{
          margin-left: 5px;
          letter-spacing: 1px;
          font-weight: 700;
          color: #333;
          font-size: 16px;
        }
      }
      ul{
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        li{
          width:200px;
          margin-top: 15px;
          margin-right: 15px;
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>