import {ActionTypes, AddPostActionType, PostsType, ProfilePageType, UpdatePostTextActionType} from "./store";
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
        case "ADD-POST":
            if(state.newPostText === '') {
                return state
            }
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            const oldPosts = state.posts
            state.posts = [...oldPosts, newPost]
            state.newPostText = ''
            return state
        case "UPDATE-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const AddPostAC = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const UpdatePostTextAC = (newText: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-TEXT', newText: newText}
}

export default profileReducer;