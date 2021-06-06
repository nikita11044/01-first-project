import {v1} from "uuid";
import {ActionTypes} from "./action-creators";
import {message} from "antd";

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
        {id: 'testDialogId_1', name: 'Dietrich'},
        {id: 'testDialogId_2', name: 'Wolfgang'},
        {id: 'testDialogId_3', name: 'Helen'},
    ],
    messages: {
        'testDialogId_1': [{id: v1(), message: 'Hi!'}, {id: v1(), message: 'How are you?'}, {id: v1(), message: 'Yo'}],
        'testDialogId_2': [{id: v1(), message: 'Greetings!'}],
        'testDialogId_3': []
    }
}

// type InitialStateType = typeof initialState

type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: { [key: string] : Array<MessageType> }
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            if (action.receiverId) {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [action.receiverId]: [...state.messages[action.receiverId], {id: v1(), message: action.message}]
                    }
                    // messages[action.dialogId]: [...state.messages, {id: v1(), message: action.message}]
                }
            }
            return state
        }
        default:
            return state
    }
}

export default dialogsReducer;