<template>
    <div class="region">
      <div class="content">
        <div class="left">地区:</div>
        <ul class="area">
          <li :class="{active:activeFlag===''}" @click="changeRegion('')">全部</li>
          <li v-for="item in regionList" :key="item.id" :class="{active:activeFlag===item.value}" @click="changeRegion(item.value)">{{ item.name }}</li>
        </ul>
      </div>
    </div>
</template>

<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import {HospitalLevelAndRegionArr , HospitalLevelAndRegionResponseData } from '@/api/home/type'
import {reqTitle} from '@/api/home/index'

let regionList = ref<HospitalLevelAndRegionArr>([])
let activeFlag = ref('')

let $emit = defineEmits(['getRegion'])

const getRegion = async ()=>{
  let data:HospitalLevelAndRegionResponseData = await reqTitle('Beijin')
  regionList.value = data.data
  console.log(data.data);
}
const changeRegion = (region:string)=>{
  activeFlag.value = region
  $emit('getRegion',region)
}

onMounted(()=>{
  getRegion()
})
</script>

<style lang="scss" scoped>
.region{
  margin-left:60px;
  color:#7f7f7f;
  .content{
    @media screen and (max-width:1450px) {
      display: flex;
    flex-wrap: wrap;
    }
    display: flex;
    // flex-wrap: wrap;
    margin-top:10px;
    .left{
      display: fixed;
      width: 40px;
      margin-top: 10px;
      margin-right:10px;
      text-shadow: #7f7f7f 0px 0px 5px;
    }
    .area{
      display:flex;
      flex-wrap:wrap;
      li{
        writing-mode:horizontal-tb;
        margin-right: 15px;
        margin-top: 10px;
        &.active{
          color: rgb(22, 200, 200);
        }
        &:hover{
          cursor:pointer;
          color: rgb(22, 200, 200);
        }
      }
    }
  }
}
</style>