import { WsConnection, WsServer } from "tsrpc";
import { server } from "..";
import { ServiceType } from "../shared/protocols/serviceProto";

export class room {
    static rooms: Map<number, room> = new Map<number, room>();

    static createRoom(): room {
        return new room();
    }

    getCurServer(): WsServer<ServiceType> {
        return server;
    }

    static id: number = 0;

    readonly roomId:number;
    constructor() {
        this.roomId = ++room.id;
        room.rooms.set(this.roomId , this);
    }

    joinRoom(con: WsConnection) {
        this.conns.push(con);
        if(this.conns.length>1){
            this.conns.forEach((con,idx) => {
                (con as WsConnection<ServiceType>).sendMsg('MsgGameCore/RoomPlayerEnough', {
                    playerType:idx%2==0?"A":"B"
                });
            })
        }
    }

    broadcastMsg<T extends keyof ServiceType['msg']>(msgName: T, msg: ServiceType['msg'][T]) {
        this.conns.forEach((con) => {
            con.sendMsg(msgName, msg);
        })
    }

    broadcastAllMsg<T extends keyof ServiceType['msg']>(msgName: T, msg: ServiceType['msg'][T]) {
        return this.getCurServer().broadcastMsg(msgName, msg, this.conns);
    }

    conns: WsConnection[] = [];

}