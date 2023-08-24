import { WsConnection, WsServer } from "tsrpc";
import { server } from "..";
import { ServiceType } from "../shared/protocols/serviceProto";

export class room {
    static rooms: Map<number, room> = new Map<number, room>();

    createRoom(): room {
        return new room();
    }

    getCurServer(): WsServer<ServiceType> {
        return server;
    }

    static id: number = 0;
    constructor() {
        room.id++;
        room.rooms.set(room.id, this);
    }

    joinRoom(con: WsConnection) {
        this.broadcastMsg('MsgGameCore/JoinRoom',{
            'user':'eeeee'
        })
        this.conns.push(con);
    }

    broadcastMsg(msgName: string, msg: any) {
        this.conns.forEach((con) => {
            con.sendMsg(msgName, msg);
        })
    }

    conns: WsConnection[] = [];

}