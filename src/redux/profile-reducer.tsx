import {ActionTypes, AddPostActionType, PostsType, ProfilePageType, UpdatePostTextActionType} from "./state";
import {v1} from "uuid";

const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
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