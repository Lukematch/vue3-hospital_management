<template>
    <div v-if="hospitalDetail" class="register">
      <div class="title">
        <h1>{{ hospitalDetail.hospital?.hosname }}</h1>
        <svg t="1706602048035" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8038" data-spm-anchor-id="a313x.search_index.0.i5.5b913a81vuBd98" width="16" height="16"><path d="M868.22016435 961.9623125h-92.05478964a93.59216104 93.59216104 0 0 1-93.70465224-93.25468916V155.29237666A93.59216104 93.59216104 0 0 1 776.16537471 62.0376875H868.22016435a93.59216104 93.59216104 0 0 1 93.6671546 93.25468916v713.41524668A93.59216104 93.59216104 0 0 1 868.22016435 961.9623125z m36.40944991-806.66993584a36.37195401 36.37195401 0 0 0-36.40944991-36.25946279h-92.05478964a36.37195401 36.37195401 0 0 0-36.44694756 36.25946279v713.41524668a36.37195401 36.37195401 0 0 0 36.44694756 36.2594628H868.22016435a36.37195401 36.37195401 0 0 0 36.40944991-36.2594628V155.29237666zM551.97165166 961.9623125h-92.05478965a93.59216104 93.59216104 0 0 1-93.66715459-93.25468916V354.58818417a93.59216104 93.59216104 0 0 1 93.66715459-93.29218592h92.05478965a93.55466425 93.55466425 0 0 1 93.66715547 93.29218593v514.11943916A93.55466425 93.55466425 0 0 1 551.97165166 961.9623125z m36.44694756-607.37412833a36.37195401 36.37195401 0 0 0-36.44694756-36.29695956h-92.05478965a36.37195401 36.37195401 0 0 0-36.4094499 36.29695956v514.11943917a36.37195401 36.37195401 0 0 0 36.4094499 36.25946279h92.05478965a36.37195401 36.37195401 0 0 0 36.44694756-36.25946279V354.58818417zM247.75963174 961.9623125H155.70484209A93.55466425 93.55466425 0 0 1 62.0376875 868.70762334v-310.88646123a93.55466425 93.55466425 0 0 1 93.66715459-93.25468916h92.05478965a93.55466425 93.55466425 0 0 1 93.66715459 93.25468916v310.88646123A93.55466425 93.55466425 0 0 1 247.75963174 961.9623125z m36.40945078-404.14115039a36.37195401 36.37195401 0 0 0-36.40945078-36.25946279H155.70484209a36.37195401 36.37195401 0 0 0-36.44694756 36.25946279v310.88646123a36.37195401 36.37195401 0 0 0 36.44694756 36.2594628h92.05478965a36.37195401 36.37195401 0 0 0 36.40945078-36.2594628v-310.88646123z" p-id="8039" data-spm-anchor-id="a313x.search_index.0.i4.5b913a81vuBd98" class="selected" fill="#bfbfbf"></path></svg>
        <span>{{ hospitalDetail.hospital?.param.hostypeString }}</span>
      </div>
      <el-card shadow="hover" class="card">
        <div class="card">
          <div class="left">
            <el-image style="width: 80px; height: 80px" :src="`data:image/jpeg;base64,${hospitalDetail.hospital?.logoData}`" />
          </div>
          <div class="right">
            <div class="up">
              <h4>挂号规则</h4>
              <ul>
                <li>预约周期：{{ hospitalDetail.bookingRule?.cycle }}天</li>
                <li>放号时间：{{ hospitalDetail.bookingRule?.releaseTime }}</li>
                <li>停挂时间：{{ hospitalDetail.bookingRule?.stopTime }}</li>
                <li class="lastSpan">退号时间：工作日{{ hospitalDetail.bookingRule?.quitTime }}前取消(就诊前)</li>
              </ul>
            </div>
            <div class="down">
              <h4>医院预约规则</h4>
              <ul>
                <li v-for="(item,index) in hospitalDetail.bookingRule?.rule" :key="index">{{index+1}}.{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </el-card>
      <containerList/>
    </div>
    <div v-else>
      <el-empty description="暂无数据" />
    </div>
</template>

<script setup lang='ts'>
import { useHospitalDetail } from "@/store/hospitalDetail";
import { storeToRefs } from "pinia";
import  containerList  from './container_list/index.vue'

let store = useHospitalDetail()
console.log(store);

// const { hospitalDetail } =  <any>storeToRefs(store)
const { hospitalDetail } = storeToRefs(store)
// const { hospital , bookingRule } = hospitalDetail._object.

// console.log(hospital,bookingRule);


</script>

<style scoped>
.register{
  margin-top: 40px;
  margin-left: 20px;
  /* display: flex; */
  .title{
    margin-bottom: 50px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    h1 {
      color: #333;
      font-size: 20px;
      font-weight: 700;
      margin-right: 15px;
    }
    span{
      color: #7f7f7f;
      font-size: 16px;
    }
  }
  .card{
    display: flex;
    width: 521px;
    .left{
      flex:2;
    }
    .right{
      flex:8;
      .up , .down{
        flex-wrap: wrap;
        margin-bottom: 20px;
        h4{
          margin-bottom: 10px;
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            margin-right: 34px;
            color: #7f7f7f;
            font-size: 13px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}

</style>