import {AppStateType} from "../redux-store";
import {DialogsType, MessageType} from "../dialogs-reducer";

export const getDialogs= (state: AppStateType): DialogsType[] => {
    return state.dialogs.dialogs
}

export const getMessages= (state: AppStateType): { [key: string] : MessageType[] } => {
    return state.dialogs.messages
}