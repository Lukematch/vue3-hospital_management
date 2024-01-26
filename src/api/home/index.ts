// home页面请求接口api封装
import request from '@/utils/request'
import { HospitalResponseData, HospitalLevelAndRegionResponseData, HospitalIndfo } from './type'

enum API {
  // /api/hosp/hospital/{page}/{limit}
  // 获取已有医院的数据接口地址
  HOSPITAL_URL = '/hosp/hospital/',
  HOSPITALLEVELANDGEION_URL = '/cmn/dict/findByDictCode/',
  HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'
}

export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => request.get<HospitalResponseData, any>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)

export const reqTitle = (type: string) => request.get<HospitalLevelAndRegionResponseData, any>(API.HOSPITALLEVELANDGEION_URL + `${type}`)

export const reqHospitalInfo = (hosname: string) => request.get<HospitalIndfo, any>(API.HOSPITALINFO_URL + `${hosname}`)

