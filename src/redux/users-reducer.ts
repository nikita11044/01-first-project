import {actions, ActionTypes} from "./action-creators";
import {AppStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

export type UserType = {
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
    users: [] as Array<UserType>,
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
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
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

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    dispatch(actions.toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setUsers(data.data.items))
    dispatch(actions.setTotalUsersCount(data.data.totalCount))
    dispatch(actions.toggleIsFetching(false))
}

const followUnfollowFlow = async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>, userId: string, apiMethod: (userId: string) => any, actionCreator: (userId: string) => ActionTypes) => {

    dispatch(actions.toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId))
}

export const follow = (userId: string): ThunkType => () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), actions.followSuccess)
}

export const unfollow = (userId: string): ThunkType => () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), actions.unfollowSuccess)
}

export default usersReducer