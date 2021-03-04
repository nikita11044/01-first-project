export type UserType = {
    name: string
    id: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    uniqueUrlName: string
}

let initialState = {
    users: [] as Array<UserType>
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.id ? {...u, followed: true} : u
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.id ? {...u, followed: false} : u
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