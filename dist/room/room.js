"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.room = void 0;
const __1 = require("..");
class room {
    createRoom() {
        return new room();
    }
    getCurServer() {
        return __1.server;
    }
    constructor() {
        this.conns = [];
        room.id++;
        room.rooms.set(room.id, this);
    }
    joinRoom(con) {
        this.broadcastMsg('MsgGameCore/JoinRoom', {
            'user': 'eeeee'
        });
        this.conns.push(con);
    }
    broadcastMsg(msgName, msg) {
        this.conns.forEach((con) => {
            con.sendMsg(msgName, msg);
        });
    }
}
exports.room = room;
room.rooms = new Map();
room.id = 0;
