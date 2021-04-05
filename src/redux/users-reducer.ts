import {actions, ActionTypes} from "./action-creators";
import {AppStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {usersAPI} from "../api/api";

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

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getUsers = (currentPage: number, pageSize: number):ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
        dispatch(actions.toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(actions.setUsers(data.data.items))
                dispatch(actions.setTotalUsersCount(data.data.totalCount))
                dispatch(actions.toggleIsFetching(false))
            })
    }
}

export const follow = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
        dispatch(actions.toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(() => {
                dispatch(actions.followSuccess(userId))
                dispatch(actions.toggleFollowingInProgress(false, userId))
            })
    }
}

export const unfollow = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
        dispatch(actions.toggleFollowingInProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(() => {
                dispatch(actions.unfollowSuccess(userId))
                dispatch(actions.toggleFollowingInProgress(false, userId))
            })
    }
}

export default usersReducer