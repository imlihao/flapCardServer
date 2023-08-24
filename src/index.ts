import * as path from "path";
import { HttpServer, WsConnection, WsServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';
import { room } from "./room/room";

/**
 * http的登陆，登陆后返回token
 * 
 * 分为 match 和 room
 * match是短链接，当match的时候，检测当前所有的玩家，分配对手
 * 
 * 
 * 
 */
// Create the Server
export const server = new WsServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

export const hServer = new HttpServer(serviceProto,{
    port: 3001,
    // Remove this to use binary mode (remove from the client too)
    json: true
})

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // server.listenMsg('CreateRoom',call=>{
    //     let rom = room.createRoom();
    //     rom.conns.push(call.conn as WsConnection);
    //     rom.broadcastMsg('MsgGameCore/JoinRoom',{
    //         roomId:rom.roomId,
    //         userName:"ershazi"
    //     });
    // })

    server.listenMsg('MsgGameCore/Flap',call=>{
        room.rooms.forEach(v=>{
            if(v.conns.indexOf(call.conn as WsConnection)>=0){
                v.broadcastMsg('MsgGameCore/Flap',call.msg);
            }
        })
    })

    server.listenMsg('MsgGameCore/JoinRoom',call=>{
        room.rooms.get(call.msg.roomId)?.joinRoom(call.conn as WsConnection);
    })
    // TODO
    // Prepare something... (e.g. connect the db)
};

// Entry function
async function main() {
    await init();
    await server.start();
    await hServer.start();
}
main();