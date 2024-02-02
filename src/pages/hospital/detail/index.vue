<template>
  <div v-if="!hospitalDetail.hospital">
    <el-empty description="暂无数据" />
  </div>
  <div v-else class="detail">
    <div class="title">
      <h1>{{ hospitalDetail.hospital?.hosname }}</h1>
      <svg t="1706602048035" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8038" data-spm-anchor-id="a313x.search_index.0.i5.5b913a81vuBd98" width="16" height="16"><path d="M868.22016435 961.9623125h-92.05478964a93.59216104 93.59216104 0 0 1-93.70465224-93.25468916V155.29237666A93.59216104 93.59216104 0 0 1 776.16537471 62.0376875H868.22016435a93.59216104 93.59216104 0 0 1 93.6671546 93.25468916v713.41524668A93.59216104 93.59216104 0 0 1 868.22016435 961.9623125z m36.40944991-806.66993584a36.37195401 36.37195401 0 0 0-36.40944991-36.25946279h-92.05478964a36.37195401 36.37195401 0 0 0-36.44694756 36.25946279v713.41524668a36.37195401 36.37195401 0 0 0 36.44694756 36.2594628H868.22016435a36.37195401 36.37195401 0 0 0 36.40944991-36.2594628V155.29237666zM551.97165166 961.9623125h-92.05478965a93.59216104 93.59216104 0 0 1-93.66715459-93.25468916V354.58818417a93.59216104 93.59216104 0 0 1 93.66715459-93.29218592h92.05478965a93.55466425 93.55466425 0 0 1 93.66715547 93.29218593v514.11943916A93.55466425 93.55466425 0 0 1 551.97165166 961.9623125z m36.44694756-607.37412833a36.37195401 36.37195401 0 0 0-36.44694756-36.29695956h-92.05478965a36.37195401 36.37195401 0 0 0-36.4094499 36.29695956v514.11943917a36.37195401 36.37195401 0 0 0 36.4094499 36.25946279h92.05478965a36.37195401 36.37195401 0 0 0 36.44694756-36.25946279V354.58818417zM247.75963174 961.9623125H155.70484209A93.55466425 93.55466425 0 0 1 62.0376875 868.70762334v-310.88646123a93.55466425 93.55466425 0 0 1 93.66715459-93.25468916h92.05478965a93.55466425 93.55466425 0 0 1 93.66715459 93.25468916v310.88646123A93.55466425 93.55466425 0 0 1 247.75963174 961.9623125z m36.40945078-404.14115039a36.37195401 36.37195401 0 0 0-36.40945078-36.25946279H155.70484209a36.37195401 36.37195401 0 0 0-36.44694756 36.25946279v310.88646123a36.37195401 36.37195401 0 0 0 36.44694756 36.2594628h92.05478965a36.37195401 36.37195401 0 0 0 36.40945078-36.2594628v-310.88646123z" p-id="8039" data-spm-anchor-id="a313x.search_index.0.i4.5b913a81vuBd98" class="selected" fill="#bfbfbf"></path></svg>
      <span>{{ hospitalDetail.hospital?.param.hostypeString }}</span>
    </div>
    <div class="card">
      <el-card hadow="hover">
        <div class="up">
          <div class="left">
            <el-image style="width: 80px; height: 80px" :src="`data:image/jpeg;base64,${hospitalDetail.hospital?.logoData}`" />
          </div>
          <div class="right">
            <el-icon>
              <Position/>
            </el-icon>
            <span>{{ hospitalDetail.hospital?.route }}</span>
          </div>
        </div>
        <div class="down">
          <h2>医院介绍</h2>
          <span>{{ hospitalDetail.hospital?.intro }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { Position } from '@element-plus/icons-vue';
import { useHospitalDetail } from '@/store/hospitalDetail';
import { storeToRefs } from 'pinia';

let store = useHospitalDetail()
const { hospitalDetail }:any = storeToRefs(store)
</script>

<style scoped>
.detail{
  margin-top: 40px;
  margin-left: 20px;
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
      margin-left: 5px;
      color: #7f7f7f;
      font-size: 16px;
    }
  }
  .card{
    width: 900px;
    height: 485px;
    margin-bottom: 40px;
    .up{
      display: flex;
      align-items: center;
      .left{
        flex: 1;
        margin-right: 20px;
      }
      .right{
        flex: 9;
        color: #7f7f7f;
        span{
          margin-top: -20px;
          margin-left: 5px;
          text-align:right;
          /* display:inline-block; */
          line-height: 24px;
        }
      }
    }
    .down{
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      h2{
        margin-bottom: 15px;
        margin-left: 5px;
        letter-spacing: 1px;
        font-weight: 700;
        color: #333;
        font-size: 16px;
      }
      span{
        line-height: 24px;
        font-size: 13px;
        /* display:block; */
        text-indent:2em;
        color: #7f7f7f;
      }
    }
  }
}
</style>