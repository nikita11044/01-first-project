export interface IUser {
    name: string
    id: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

let initialState = {
    users: [] as Array<IUser>,
    totalUsersCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<string>
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
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
                users: action.users
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "TOGGLE-FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
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
    users: Array<IUser>
}

export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalCount: number
}

export type ToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

export type ToggleFollowingInProgressActionType = {
    type: 'TOGGLE-FOLLOWING-IN-PROGRESS'
    isFetching: boolean,
    userId: string
}

export type UsersActionTypes = FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    ToggleIsFetchingActionType |
    ToggleFollowingInProgressActionType

export const follow = (userID: string): FollowActionType => {
    return {type: 'FOLLOW', id: userID}
}

export const unfollow = (userID: string): UnfollowActionType => {
    return {type: 'UNFOLLOW', id: userID}
}

export const setUsers = (users: Array<IUser>): SetUsersActionType => {
    return {type: 'SET-USERS', users: users}
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: 'SET-CURRENT-PAGE', currentPage}
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount}
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching}
}

export const toggleFollowingInProgress = (isFetching: boolean, userId: string): ToggleFollowingInProgressActionType => {
    return {type: "TOGGLE-FOLLOWING-IN-PROGRESS", isFetching, userId}
}

export default usersReducer