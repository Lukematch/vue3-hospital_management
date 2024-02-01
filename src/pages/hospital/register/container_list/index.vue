<template>
  <div class="container">
  <h1>选择科室</h1>
  <el-container style="height: 600px">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1">Option 1</el-menu-item>
          <el-menu-item index="2">Option 2</el-menu-item>
          <el-menu-item index="3">Option 3</el-menu-item>
          <el-menu-item index="4">Option 4</el-menu-item>
          <el-menu-item index="5">Option 5</el-menu-item>
          <el-menu-item index="6">Option 6</el-menu-item>
          <el-menu-item index="7">Option 7</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="option1" label="Option1"/>
          </el-table>
          <el-table :data="tableData">
            <el-table-column prop="option2" label="Option2"/>
          </el-table>
          <el-table :data="tableData">
            <el-table-column prop="option3" label="Option3"/>
          </el-table>
          <el-table :data="tableData">
            <el-table-column prop="option4" label="Option4"/>
          </el-table>
          <el-table :data="tableData">
            <el-table-column prop="option5" label="Option5"/>
          </el-table>
          <el-table :data="tableData">
            <el-table-column prop="option6" label="Option6"/>
          </el-table>
          <el-table :data="tableData">
            <el-table-column prop="option7" label="Option7"/>
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
// import {  } from '@element-plus/icons-vue'

const item = {
  option1: '内容1',
  option2: '内容2',
  option3: '内容3',
  option4: '内容4',
  option5: '内容5',
  option6: '内容6',
  option7: '内容7',
}
const tableData = ref(Array.from({ length: 3 }).fill(item))
</script>

<style scoped>
.container {
  margin-top:50px;
  /* display: flex;
  flex: wrap; */
  h1{
    letter-spacing: 1px;
    font-weight: 700;
    color: #333;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .el-header{
    /* position: relative; */
    color: var(--el-text-color-primary);
  }
  .el-aside {
    color: var(--el-text-color-primary);
  }
}
</style>