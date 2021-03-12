import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

let initialState = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ]
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            if (state.newPostText === '') {
                return state
            }
            const oldPosts = state.posts
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...oldPosts, newPost]
            }
        }
        case "UPDATE-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT'
    newText: string
}

export type ProfileActionTypes = AddPostActionType |
    UpdatePostTextActionType

export const addPost = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const updatePostText = (newText: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-TEXT', newText: newText}
}

export default profileReducer;