import { ServiceProto } from 'tsrpc-proto';
import { MsgChat } from './MsgChat';
import { MsgCreateRoom } from './MsgCreateRoom';
import { MsgFlap } from './MsgGameCore/MsgFlap';
import { MsgJoinRoom } from './MsgGameCore/MsgJoinRoom';
import { MsgRoomPlayerEnough } from './MsgGameCore/MsgRoomPlayerEnough';
import { ReqLogin, ResLogin } from './PtlLogin';
import { ReqSend, ResSend } from './PtlSend';

export interface ServiceType {
    api: {
        "Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "Send": {
            req: ReqSend,
            res: ResSend
        }
    },
    msg: {
        "Chat": MsgChat,
        "CreateRoom": MsgCreateRoom,
        "MsgGameCore/Flap": MsgFlap,
        "MsgGameCore/JoinRoom": MsgJoinRoom,
        "MsgGameCore/RoomPlayerEnough": MsgRoomPlayerEnough
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 0,
            "name": "Chat",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "CreateRoom",
            "type": "msg"
        },
        {
            "id": 4,
            "name": "MsgGameCore/Flap",
            "type": "msg"
        },
        {
            "id": 5,
            "name": "MsgGameCore/JoinRoom",
            "type": "msg"
        },
        {
            "id": 6,
            "name": "MsgGameCore/RoomPlayerEnough",
            "type": "msg"
        },
        {
            "id": 2,
            "name": "Login",
            "type": "api",
            "conf": {}
        },
        {
            "id": 1,
            "name": "Send",
            "type": "api"
        }
    ],
    "types": {
        "MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "MsgCreateRoom/MsgCreateRoom": {
            "type": "Interface"
        },
        "MsgGameCore/MsgFlap/MsgFlap": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "WhoDidThis",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 0,
                    "name": "cardIdx",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "cardId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "MsgGameCore/MsgJoinRoom/MsgJoinRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "userName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "MsgGameCore/MsgRoomPlayerEnough/MsgRoomPlayerEnough": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "playerType",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "A"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "B"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlLogin/ReqLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "nickname",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "PtlSend/ReqSend": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSend/ResSend": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};