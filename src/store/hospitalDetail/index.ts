// import { createPinia } from 'pinia'
import { defineStore } from "pinia"
import { HospitalDetailData , HospitalDetail } from "@/api/hospital/type"
import {reqHospitalDetail} from '@/api/hospital'
import { DetailState } from "./interface"

export const useHospitalDetail =  defineStore('hospitalDetail',{
  state: ():DetailState =>{
    return {
      hospitalDetail:<HospitalDetailData>{}
    }
  },
  actions:{
    async getHospitalDetail (hoscode:string){
      let res:HospitalDetail = await reqHospitalDetail(hoscode)
      console.log(res);
      if(res.code === 200){
       this.hospitalDetail = res.data
      }
    }
  }
})