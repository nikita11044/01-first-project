import {v1} from "uuid";

export type MessageType = {
    id: string,
    message: string
}

export type DialogsType = {
    id: string,
    name: string
}

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

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionTypes): InitialStateType => {
    switch (action.type) {
        case "UPDATE-MESSAGE-BODY": {
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        }
        case "SEND-MESSAGE": {
            const body  = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: v1(), message: body}]
            }
        }
        default:
            return state
    }
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-MESSAGE-BODY'
    newMessageBody: string
}

export type DialogsActionTypes =
    SendMessageActionType |
    UpdateNewMessageBodyActionType

export const SendMessageAC = (): SendMessageActionType => {
    return {type: 'SEND-MESSAGE'}
}

export const UpdateNewMessageBodyAC = (newMessageBody: string): UpdateNewMessageBodyActionType => {
    return {type: 'UPDATE-MESSAGE-BODY', newMessageBody: newMessageBody}
}

export default dialogsReducer;