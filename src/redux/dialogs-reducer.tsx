import {ActionTypes, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";
import {v1} from "uuid";

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dietrich'},
        {id: v1(), name: 'Wolfgang'},
        {id: v1(), name: 'Helen'},
        {id: v1(), name: 'Klaus'},
        {id: v1(), name: 'Brigitte'},
        {id: v1(), name: 'Marlene'}
    ],
    messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'}
    ],
    newMessageBody: ''
}

type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
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