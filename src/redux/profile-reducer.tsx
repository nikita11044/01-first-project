import {PostsType, ProfilePageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";
import {v1} from "uuid";

let initialState = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ]
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            if(state.newPostText === '') {
                return state
            }
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state}
            const oldPosts = state.posts
            stateCopy.posts = [...oldPosts, newPost]
            stateCopy.newPostText = ''
            return stateCopy
        }
        case "UPDATE-TEXT": {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
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

export type ActionTypes = AddPostActionType |
    UpdatePostTextActionType |
    SendMessageActionType |
    UpdateNewMessageBodyActionType

export const AddPostAC = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const UpdatePostTextAC = (newText: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-TEXT', newText: newText}
}

export default profileReducer;