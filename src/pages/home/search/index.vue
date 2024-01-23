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
  width: 100;
  margin-top:50px;
  justify-content: center;
  :deep(.el-input__wrapper){
    width: 400px;
    margin-right: 5px;
  }
}

</style>