import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history:createWebHistory(),
  routes:[
    // 主页
    {path:'/home',component:()=>import('@/pages/home/index.vue')},
    // 详情页
    {path:'/hospital',component:()=>import('@/pages/hospital/index.vue'),
    // 详情页各个子项
    children:[
      {path:'/hospital/register',component:()=>import('@/pages/hospital/register/index.vue')},
      {path:'/hospital/detail',component:()=>import('@/pages/hospital/detail/index.vue')},
      {path:'/hospital/notice',component:()=>import('@/pages/hospital/notice/index.vue')},
      {path:'/hospital/close',component:()=>import('@/pages/hospital/close/index.vue')},
      {path:'/hospital/search',component:()=>import('@/pages/hospital/search/index.vue')}
    ]
    },
    // 重定向
    {path:'/',redirect:'/home'}
  ],
  scrollBehavior(){
    return {
      left:0,
      top:0
    }
  }
})