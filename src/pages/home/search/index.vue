<template>
  <div class="search">
    <el-autocomplete
    clearable
    v-model="state"
    placeholder="Please input"
    />
    <el-button type="primary" :icon="Search"></el-button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const state = ref('')

</script>

<style scoped lang="scss">
.search{
  display: flex;
  margin-top:50px;
  justify-content: center;
  :deep(.el-input__wrapper){
    width: 400px;
    height: 45px;
    margin-right: 5px;
  }
  :deep(.el-button){
    height: 45px;
    width: 50px;
  }
}

</style>