import {AppStateType} from "../redux-store";
import {DialogsType, MessageType} from "../dialogs-reducer";

export const getDialogs= (state: AppStateType): DialogsType[] => {
    return state.dialogs.dialogs
}

export const getMessages= (state: AppStateType): MessageType[] => {
    return state.dialogs.messages
}