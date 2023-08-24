import { ApiCall, WsConnection } from "tsrpc";
import { ReqCreateOneRoom, ResCreateOneRoom } from "../shared/protocols/PtlCreateOneRoom";
import { room } from "../room/room";

export default async function (call: ApiCall<ReqCreateOneRoom, ResCreateOneRoom>) {
    let rom = room.createRoom();
    rom.conns.push(call.conn as WsConnection);
    call.succ({
        'roomId':rom.roomId
    })
    
}