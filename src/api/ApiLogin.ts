import { ApiCall } from "tsrpc";
import { ReqLogin, ResLogin } from "../shared/protocols/PtlLogin";

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
    // TODO
    call.succ({
        'user':{
            id:123,
            'nickname':"ershazi"
        }
    })
}