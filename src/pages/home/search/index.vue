<template>
  <div class="search">
    <el-autocomplete
    clearable
    v-model="state"
    placeholder="Please input"
    :trigger-on-focus="false"
    :fetch-suggestions="fetchData"
    @select="selectDetail"
    />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { reqHospitalInfo } from '@/api/home';
import type { HospitalIndfo , Content } from '@/api/home/type';
import { useRouter } from 'vue-router';

const state = ref<string>('')
// let hosname = ref<string>('')

let $router = useRouter()

const fetchData:any = async (value:string,callback:any)=>{
  // console.log(value);
  let res:HospitalIndfo = await reqHospitalInfo(value)
  let showData = res.data.map(item=>{
    return {
      value:item.hosname,//医院名字
      hoscode:item.hoscode//医院标识
    }
  })
  callback(showData)
}
const selectDetail:any = (item:Content)=>{
    console.log(item);
    $router.push('/hospital')
}

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
    width: 60px;
  }
}

</style>