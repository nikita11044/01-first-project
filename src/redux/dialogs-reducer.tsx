import {ActionTypes, DialogsPageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./state";
import {v1} from "uuid";

const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case "UPDATE-MESSAGE-BODY":
            state.newMessageBody = action.newMessageBody
            return state
        case "SEND-MESSAGE":
            const oldMessages = state.messages
            const body  = state.newMessageBody
            state.newMessageBody = ''
            state.messages = [...oldMessages, {id: v1(), message: body}]
            return state
        default:
            return state
    }
}

export const SendMessageAC = (): SendMessageActionType => {
    return {type: 'SEND-MESSAGE'}
}

export const UpdateNewMessageBodyAC = (newMessageBody: string): UpdateNewMessageBodyActionType => {
    return {type: 'UPDATE-MESSAGE-BODY', newMessageBody: newMessageBody}
}

export default dialogsReducer;