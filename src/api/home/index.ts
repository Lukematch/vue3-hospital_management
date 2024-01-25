// home页面请求接口api封装
import request from '@/utils/request'
import { HospitalResponseData ,HospitalLevelAndRegionResponseData } from './type'

enum API {
  // /api/hosp/hospital/{page}/{limit}
  // 获取已有医院的数据接口地址
  HOSPITAL_URL = '/hosp/hospital/',
  HOSPITALLEVELANDGEION_URL='/cmn/dict/findByDictCode/'
}

export const reqHospital = (page:number,limit:number) => request.get<HospitalResponseData,any>(API.HOSPITAL_URL+`${page}/${limit}`)

export const reqTitle = (type:string) => request.get<HospitalLevelAndRegionResponseData,any>(API.HOSPITALLEVELANDGEION_URL+`${type}`)

