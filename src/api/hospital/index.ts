import request from '@/utils/request'
import { HospitalDetail } from './type'

enum API{
  HOSPITALL_URL = '/hosp/hospital/'
}

export const reqHospitalDetail = (hoscode:string) => request.get<HospitalDetail,any>(API.HOSPITALL_URL+`${hoscode}`)