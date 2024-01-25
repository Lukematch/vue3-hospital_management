// 定义home页面的ts类型
export interface ResponseData {
  code: number,
  message: string,
  ok: boolean,

}

// 某个医院对象的ts类型
// content
export interface Hospital {
  "id": string,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
    "hostypeString": string,
    "fullAddress": string
  },
  // 医院代号
  "hoscode": string,
  "hosname": string,
  "provinceCode": string,
  "cityCode": string,
  "districtCode": string,
  "address": string,
  "logoData": string,
  "intro": string,
  "route": string,
  "status": number,
  "bookingRule": {
    "cycle": number,
    "releaseTime": string,
    "stopTime": string,
    "quitDay": number,
    "quitTime": string,
    "rule": string[]
  }
}

export type Content = Hospital[]

export interface HospitalResponseData extends ResponseData {
  data: {
    "content": Content,
    "pageable": {
      "sort": {
        "sorted": boolean,
        "unsorted": boolean,
        "empty": boolean
      },
      "pageNumber": number,
      "pageSize": number,
      "offset": number,
      "paged": boolean,
      "unpaged": boolean
    },
    "totalPages": number,
    "totalElements": number,
    "last": boolean,
    "first": boolean,
    "sort": {
      "sorted": boolean,
      "unsorted": boolean,
      "empty": boolean
    },
    "numberOfElements": number,
    "size": number,
    "number": number,
    "empty": boolean
  }
}

export interface HospitalLevelAndRegion {
      "createTime": string,
      "dictCode": string,
      "hasChildren": boolean,
      "id": number,
      "isDeleted": number,
      "name": string,
      "param": {},
      "parentId": number,
      "updateTime": string,
      "value": string
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[]
export interface HospitalLevelAndRegionResponseData extends ResponseData{
  data:HospitalLevelAndRegionArr
}
