import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type MessageType = {
    id: string,
    message: string
}

export type DialogsType = {
    id: string,
    name: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT'
    newText: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-MESSAGE-BODY'
    newMessageBody: string
}

export type ActionTypes = AddPostActionType |
    UpdatePostTextActionType |
    SendMessageActionType |
    UpdateNewMessageBodyActionType

// export const AddPostAC = ():AddPostActionType => {
//     return {type: 'ADD-POST'}
// }
//
// export const SendMessageAC = ():SendMessageActionType => {
//     return {type: 'SEND-MESSAGE'}
// }
//
// export const UpdatePostTextAC = (newText: string): UpdatePostTextActionType => {
//     return {type: 'UPDATE-TEXT', newText: newText}
// }
//
// export const UpdateNewMessageBodyAC = (newMessageBody: string): UpdateNewMessageBodyActionType => {
//     return {type: 'UPDATE-MESSAGE-BODY', newMessageBody: newMessageBody}
// }

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: "It's my first post", likesCount: 11}
            ]
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: RootStateType)  {
        console.log('State rendered')
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store;