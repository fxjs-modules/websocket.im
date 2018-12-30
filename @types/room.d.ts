/// <reference path="_common.d.ts" />

/// <reference path="message.d.ts" />
/// <reference path="user.d.ts" />

declare namespace FxWebSocketIM_Room {
    type RoomType = 
        | 'p2p'
        | 'group'
        
    type RoomRole =
        | 'p2p@caller'
        | 'p2p@callee'
        | 'group@creator'
        | 'group@super_admin'
        | 'group@admin'
        | 'group@member'

    interface IMRoom {
        id: FxWebSocketIM.IdType

        creator: FxWebSocketIM_User.IMUser
        messages: FxWebSocketIM_Message.IMMessage[]
        history_messages: FxWebSocketIM_Message.IMMessage[]
    }

    interface IMRoomP2P extends IMRoom {
    }

    interface IMRoomGroup extends IMRoom {
        announcement: string
    }
}