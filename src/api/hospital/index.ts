import request from '@/utils/request'
import { HospitalDetail , DepartmentList } from './type'

enum API{
  HOSPITALL_URL = '/hosp/hospital/',
  DEPARTMENT_URL = '/hosp/hospital/department/'
}

export const reqHospitalDetail = (hoscode:string) => request.get<HospitalDetail,any>(API.HOSPITALL_URL+`${hoscode}`)

export const reqDepartment = (hoscode:string) => request.get<DepartmentList,any>(API.DEPARTMENT_URL+`${hoscode}`)

