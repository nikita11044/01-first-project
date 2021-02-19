import {v1} from "uuid";

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

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type UpdateTextActionType = {
    type: 'UPDATE-TEXT'
    newText: string
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-MESSAGE-BODY'
    newMessageBody: string
}

export const AddPostAC = ():AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const SendMessageAC = ():SendMessageActionType => {
    return {type: 'SEND-MESSAGE'}
}

export const UpdateTextAC = (newText: string): UpdateTextActionType => {
    return {type: 'UPDATE-TEXT', newText: newText}
}

export const UpdateNewMessageBodyAC = (newMessageBody: string): UpdateNewMessageBodyActionType => {
    return {type: 'UPDATE-MESSAGE-BODY', newMessageBody: newMessageBody}
}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | UpdateTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType) => void
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
        if(action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._callSubscriber(this._state)
        } else if(action.type === 'SEND-MESSAGE') {
            let oldMessages = this._state.dialogsPage.messages
            let body  = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages = [...oldMessages, {id: v1(), message: body}]
            this._callSubscriber(this._state)
        }
    }
}

export default store;