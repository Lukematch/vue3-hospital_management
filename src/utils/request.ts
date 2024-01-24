// 对axios进行二次封装
import axios from 'axios'

const request = axios.create({
  baseURL:'',
  // 请求超出5s为请求超时/失败
  timeout:5000
})

export default request