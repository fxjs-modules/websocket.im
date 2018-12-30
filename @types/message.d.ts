/// <reference path="_common.d.ts" />

/// <reference path="user.d.ts" />

declare namespace FxWebSocketIM_Message {
    type MessageEventType = 
        // for custom message(must started by 'message#')
        string
        | 'message#connect'
        | 'message#disconnect'
        | 'message#event'        
    
    type MessageType = 
        // for custom message
        string
        | 'text'
        | 'image'
        | 'audio'
        | 'video'
        | 'file'

    interface IMMessage extends FxWebSocketIM.OnceTimestampObject, FxWebSocketIM.ArchivableTimestampObject {
        id: FxWebSocketIM.IdType
        
        sendor: FxWebSocketIM_User.IMUser
        target: FxWebSocketIM_User.IMUser

        type: MessageType
    }
}