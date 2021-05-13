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
    aboutMe: string,
    contacts: { [key: string]: string },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ],
    profile: {
        aboutMe: '',
        contacts: {},
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 2,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const requestUserProfile = (userId: string): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(actions.setUserProfile(response.data))
}

export const requestStatus = (userId: string): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {

    let response = await profileAPI.getStatus(userId)
    if (response.data !== null) {
        dispatch(actions.setStatus(response.data))
    }
}

export const updateStatus = (newStatus: string): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    let response = await profileAPI.updateStatus({status: newStatus})
    if (response.data.resultCode === 0) {
        dispatch(actions.setStatus(newStatus))
    }
}

export default profileReducer;