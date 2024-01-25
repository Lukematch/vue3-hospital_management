<template>
    <div class="level">
      <h1>医院</h1>
      <div class="content">
        <div class="left">等级:</div>
        <ul class="hospital">
          <li class="active">全部</li>
          <li v-for="item in levelList" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import {reqTitle} from '@/api/home/index'
import {HospitalLevelAndRegionResponseData , HospitalLevelAndRegionArr} from '@/api/home/type'

let levelList = ref<HospitalLevelAndRegionArr>([])

const getLevel = async ()=>{
  let data:HospitalLevelAndRegionResponseData = await reqTitle('HosType')
  levelList.value = data.data
  console.log(data.data);
  
}

onMounted(()=>{
  getLevel()
})
</script>
  
<style lang="scss" scoped>
.level{
  margin-left:60px;
  color:#7f7f7f;
  h1{
    margin-bottom: 10px;
    font-weight:900;
  }
  .content{
    display:flex;
    .left{
      margin-right:10px
    }
    .hospital{
      display:flex;
      li{
        margin-right: 10px;
        &.active{
          color: #55a6fe;
        }
        &:hover{
          cursor:pointer;
          color: #55a6fe;
        }
      }
    }
  }
}
</style>