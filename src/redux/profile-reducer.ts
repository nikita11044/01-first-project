import {v1} from "uuid";
import {actions, ActionTypes} from "./action-creators";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

let initialState = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 2,
        photos: {
            small: '',
            large: ''
        }
    }
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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
        case "UPDATE-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getUserProfile = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
        profileAPI.getUserProfile(userId)
            .then(response => dispatch(actions.setUserProfile(response.data)))
    }
}

export default profileReducer;