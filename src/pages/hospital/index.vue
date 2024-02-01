<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <el-icon>
          <House />
        </el-icon>
        <span>/医院信息</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon>
            <InfoFilled />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon>
            <document />
          </el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon>
            <document />
          </el-icon>
          <span>停诊通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon>
            <Search />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {
  Menu as IconMenu,
  Document,
  InfoFilled,
  Search,
  House
} from '@element-plus/icons-vue'
import { onMounted } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
import {useHospitalDetail} from '@/store/hospitalDetail'

let $router = useRouter()
let $route = useRoute()
let store = useHospitalDetail()

const changeActive = (path: string) => {
  $router.push(path)
}
onMounted(() => {
  store.getHospitalDetail(<string>$route.query.hoscode);
})

</script>

<style scoped>
.hospital {
  min-width: 888px;
  display: flex;
  /* margin-top: 50px; */
  /* height: 635px; */
  height: 100%;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    .top {
      display: flex;
      color: #7f7f7f;
      margin-left: 22px;
      margin-top: 15px;
      margin-bottom: 15px;

    }
    /* .el-menu-vertical-demo{
      height: 100%
    } */
  }
  .content {
    flex: 8;
    height: 100%;
  }
}
</style>