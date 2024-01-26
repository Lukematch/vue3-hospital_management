<template>
    <div class="level">
      <h1>医院</h1>
      <div class="content">
        <div class="left">等级:</div>
        <ul class="hospital">
          <li :class="{active:activeFlag===''}" @click="changeLevel('')">全部</li>
          <li v-for="item in levelList" :key="item.id" @click="changeLevel(item.value)" :class="{active:activeFlag===item.value}">{{ item.name }}</li>
        </ul>
      </div>
    </div>
</template>

<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import {reqTitle} from '@/api/home/index'
import {HospitalLevelAndRegionResponseData , HospitalLevelAndRegionArr} from '@/api/home/type'

let levelList = ref<HospitalLevelAndRegionArr>([])
let activeFlag = ref('')

let $emit = defineEmits(['getLevel'])

const getLevel = async ()=>{
  let data:HospitalLevelAndRegionResponseData = await reqTitle('HosType')
  levelList.value = data.data
  console.log(data.data);
}
const changeLevel = (level:string)=>{
  console.log(level);
  activeFlag.value = level
  $emit('getLevel',level)
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
    font-size: 18px;
    margin-bottom: 10px;
    font-weight:900;
  }
  .content{
    display:flex;
    flex-wrap: wrap;
    .left{
      text-shadow: #7f7f7f 0px 0px 5px;
      margin-top: 10px;
      margin-right:10px;
    }
    .hospital{
      display:flex;
      flex-wrap:wrap;
      writing-mode:horizontal-tb;
      li{
        margin-top: 10px;
        margin-right: 10px;
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