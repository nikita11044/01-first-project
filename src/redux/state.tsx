export type MessageType = {
    id: number,
    message: string
}

export type DialogsType = {
    id: number,
    name: string
}

export type PostsType = {
    id: number
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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateTextActionType = {
    type: 'UPDATE-TEXT'
    newText: string
}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | UpdateTextActionType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dietrich'},
                {id: 2, name: 'Wolfgang'},
                {id: 3, name: 'Helen'},
                {id: 4, name: 'Klaus'},
                {id: 5, name: 'Brigitte'},
                {id: 6, name: 'Marlene'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'}
            ]
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
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost)
            this.dispatch({type: "UPDATE-TEXT", newText: ''})
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store;