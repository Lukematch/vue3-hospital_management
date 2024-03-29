import { createApp } from 'vue'
import '@/style/reset.scss'
import App from '@/App.vue'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import '@/style/element/elment.scss';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import 'element-plus/dist/index.css'
// import pinia from '@/store'
import { createPinia } from 'pinia'

const app = createApp(App)
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.use(router)
app.use(ElementPlus,{
  locale:zhCn
})
app.use(createPinia())

app.mount('#app')
