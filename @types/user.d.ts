/// <reference path="_common.d.ts" />

/// <reference path="room.d.ts" />

declare namespace FxWebSocketIM_User {
    interface IMUser extends FxWebSocketIM.TimestampObject {
        id: FxWebSocketIM.IdType
        joined_p2p: IMUserJoinedP2PRoomInfo[]
        joined_groups: IMUserJoinedGroupRoomInfo[]
    }

    interface IMUserJoinedP2PRoomInfo extends FxWebSocketIM.TimestampObject {
        role: FxWebSocketIM_Room.RoomRole
    }

    interface IMUserJoinedGroupRoomInfo extends FxWebSocketIM.TimestampObject {
        role: FxWebSocketIM_Room.RoomRole
    }
}