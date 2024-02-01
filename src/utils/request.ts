// 对axios进行二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL:'/api',
  // 请求超出30s为请求超时/失败
  timeout:30000
})
// 使用请求拦截器
request.interceptors.request.use((config)=>{
  // config 请求拦截器回调注入的对象(配置对象)
  // 可以通过请求携带公共参数 token
  return config;
})

// 响应拦截器
request.interceptors.response.use((response)=>{
  // 响应拦截器成功的回调
  return response.data;
},(error)=>{
  // 响应拦截器失败的回调
  // 可以处理http 404等问题
  let status = error.response?.status;
  switch(status){
    case 301|302|303|304:
      ElMessage({
        type:'error',
        message:'访问失败'
      })
      break;
    case 401|402|403|404:
      ElMessage({
        type:'error',
        message:'请求路径出现问题或者请求资源不存在'
      })
      break;
    case 500|501|502|503|504|505:
      ElMessage({
        type:'error',
        message:'服务器出现问题'
      })
      break;
  }

  return Promise.reject(new Error(error.message))
})

export default request