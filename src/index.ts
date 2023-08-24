import * as path from "path";
import { HttpServer, WsServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';

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