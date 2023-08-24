"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hServer = exports.server = void 0;
const path = __importStar(require("path"));
const tsrpc_1 = require("tsrpc");
const serviceProto_1 = require("./shared/protocols/serviceProto");
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
exports.server = new tsrpc_1.WsServer(serviceProto_1.serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});
exports.hServer = new tsrpc_1.HttpServer(serviceProto_1.serviceProto, {
    port: 3001,
    // Remove this to use binary mode (remove from the client too)
    json: true
});
// Initialize before server start
async function init() {
    await exports.server.autoImplementApi(path.resolve(__dirname, 'api'));
    // TODO
    // Prepare something... (e.g. connect the db)
}
;
// Entry function
async function main() {
    await init();
    await exports.server.start();
    await exports.hServer.start();
}
main();
