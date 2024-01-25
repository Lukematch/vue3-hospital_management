<template>
    <div class="region">
      <div class="content">
        <div class="left">地区:</div>
        <ul class="area">
          <li class="active">全部</li>
          <li v-for="item in regionList" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import {HospitalLevelAndRegionArr , HospitalLevelAndRegionResponseData } from '@/api/home/type'
import {reqTitle} from '@/api/home/index'

let regionList = ref<HospitalLevelAndRegionArr>([])

const getRegion = async ()=>{
  let data:HospitalLevelAndRegionResponseData = await reqTitle('Beijin')
  regionList.value = data.data
  console.log(data.data);
}
onMounted(()=>{
  getRegion()
})
</script>
  
<style lang="scss" scoped>
.region{
  color:#7f7f7f;
  .content{
    display:flex;
    margin-top:10px;
    margin-left:60px;
  }
  .left{
    margin-right:10px
  }
  .area{
    display:flex;
    flex-wrap:wrap;
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
</style>