import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqCreateOneRoom extends BaseRequest {
    
}

export interface ResCreateOneRoom extends BaseResponse {
    roomId:number
}

export const conf: BaseConf = {
    
}