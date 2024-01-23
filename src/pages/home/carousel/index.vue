<template>
  <el-carousel :interval="4000" type="card" height="240px">
    <el-carousel-item v-for="(item,index) in girlList" :key="index">
      <img :src="item['imageUrl']" style="width: 100%;height: 100%;" alt="item.imageFileLength"/>
      <!-- <h3 text="2xl" justify="center">{{ index+1 }}</h3> -->
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang='ts'>
  import { onMounted, ref } from 'vue';
import axios from 'axios'

let girlList = ref([])

async function getPicture() {
  const {data:{data}} = await axios({
    url:'https://www.mxnzp.com/api/image/girl/list/random',
    params:{
      app_id:'xvqopyqkqb1vnusl',
      app_secret:'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
    }
  })
  girlList.value = data
  // console.log(data);
  console.log(girlList.value);
}
onMounted(()=>{
  getPicture()
})
</script>
  
<style>
  
</style>