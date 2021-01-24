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

let state: RootStateType = {
    profilePage: {
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
};

export default state;