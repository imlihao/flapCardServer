import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqLogin extends BaseRequest {
        username: string,
        password: string
}

export interface ResLogin extends BaseResponse {
    user: {
        id: number,
        nickname: string
    }
}

export const conf: BaseConf = {
    
}