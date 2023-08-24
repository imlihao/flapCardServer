"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
// This is a demo code file
// Feel free to delete it
async function default_1(call) {
    // Error
    if (call.req.content.length === 0) {
        call.error('Content is empty');
        return;
    }
    // Success
    let time = new Date();
    call.succ({
        time: time
    });
    // Broadcast
    __1.server.broadcastMsg('Chat', {
        content: call.req.content,
        time: time
    });
}
exports.default = default_1;
