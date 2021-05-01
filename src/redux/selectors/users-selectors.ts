import {AppStateType} from "../redux-store";
import {User} from "../users-reducer";

export const getUsers = (state: AppStateType): User[] => {
    return state.users.users
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.users.totalUsersCount
}

export const getPageSize = (state: AppStateType): number => {
    return state.users.pageSize
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.users.isFetching
}

export const getFollowingInProgress = (state: AppStateType): string[] => {
    return state.users.followingInProgress
}