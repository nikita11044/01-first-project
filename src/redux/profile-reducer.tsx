import {v1} from "uuid";

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
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    }
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

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdatePostTextActionType = {
    type: 'UPDATE-POST-TEXT'
    newText: string
}

export type SetUserProfile = {
    type: 'SET-USER-PROFILE'
    profile: UserProfileType
}

export type ProfileActionTypes = AddPostActionType |
    UpdatePostTextActionType |
    SetUserProfile

export const addPost = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const updatePostText = (newText: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-POST-TEXT', newText: newText}
}

export const setUserProfile = (profile: UserProfileType): SetUserProfile => {
    return {type: 'SET-USER-PROFILE', profile}
}

export default profileReducer;