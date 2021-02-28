import {v1} from "uuid";

export type UserType = {
    id: string
    avatarURL: string
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
    isFollowed: boolean
}

let initialState = {
    users: [
        {
            id: v1(),
            avatarURL: 'https://memepedia.ru/wp-content/uploads/2017/06/%D0%BA%D0%B8%D0%B2%D0%B8-%D1%81-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BC%D0%B5%D0%BC.jpg',
            fullName: 'Richard W.',
            status: 'Ich bin beschäftigt',
            location: {city: 'Hamburg', country: 'Deutschland'},
            isFollowed: false
        },
        {
            id: v1(),
            avatarURL: 'https://memepedia.ru/wp-content/uploads/2017/06/%D0%BA%D0%B8%D0%B2%D0%B8-%D1%81-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BC%D0%B5%D0%BC.jpg',
            fullName: 'Irene S.',
            status: 'Ich bin beschäftigt',
            location: {city: 'Wien', country: 'Österreich'},
            isFollowed: true
        },
        {
            id: v1(),
            avatarURL: 'https://memepedia.ru/wp-content/uploads/2017/06/%D0%BA%D0%B8%D0%B2%D0%B8-%D1%81-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BC%D0%B5%D0%BC.jpg',
            fullName: 'Hans H.',
            status: 'Ich bin beschäftigt',
            location: {city: 'Berlin', country: 'Deutschland'},
            isFollowed: false
        },
        {
            id: v1(),
            avatarURL: 'https://memepedia.ru/wp-content/uploads/2017/06/%D0%BA%D0%B8%D0%B2%D0%B8-%D1%81-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BC%D0%B5%D0%BC.jpg',
            fullName: 'Walter A.',
            status: 'Ich bin beschäftigt',
            location: {city: 'München', country: 'Deutschland'},
            isFollowed: true
        }
    ]
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.id ? {...u, isFollowed: true} : u
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.id ? {...u, isFollowed: false} : u
                })
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export type FollowActionType = {
    type: 'FOLLOW'
    id: string
}

export type UnfollowActionType = {
    type: 'UNFOLLOW'
    id: string
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UserType>
}

export type UsersActionTypes = FollowActionType |
    UnfollowActionType |
    SetUsersActionType

export const FollowAC = (userID: string): FollowActionType => {
    return {type: 'FOLLOW', id: userID}
}

export const UnfollowAC = (userID: string): UnfollowActionType => {
    return {type: 'UNFOLLOW', id: userID}
}

export const SetUsersAC = (users: Array<UserType>): SetUsersActionType => {
    return {type: 'SET-USERS', users: users}
}

export default usersReducer