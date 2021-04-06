import {v1} from "uuid";
import {ActionTypes} from "./action-creators";

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
    ]
}

type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.message}]
            }
        }
        default:
            return state
    }
}

export default dialogsReducer;