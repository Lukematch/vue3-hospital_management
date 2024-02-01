// 定义医院详情页面数据类型
export interface ResponseData{
  code:number,
  meessage:string,
  ok:boolean
}

export interface HospitalDetailData{
  "bookingRule": {
    "cycle": number,
    "releaseTime": string,
    "stopTime": string,
    "quitDay": number,
    "quitTime": string,
    "rule": []
  },
  "hospital": {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
      "hostypeString": string,
      "fullAddress": string
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
    "provinceCode": string,
    "cityCode": string,
    "districtCode": string,
    "address": "",
    "logoData": string,
    "intro": null,
    "route": string,
    "status": number,
    "bookingRule": null
  }
}

export interface HospitalDetail extends ResponseData{
  data:HospitalDetailData
}