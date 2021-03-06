import {UserProfileType} from "./profile-reducer";
import {UserType} from "./users-reducer";
import {v1} from "uuid";
import {RequestStatusType} from "./app-reducer";

export const actions = {
    followSuccess: (userID: string) => ({type: 'FOLLOW', id: userID} as const),
    unfollowSuccess: (userID: string) => ({type: 'UNFOLLOW', id: userID} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET-USERS', users: users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => ({type: 'TOGGLE-FOLLOWING-IN-PROGRESS', isFetching, userId} as const),
    sendMessage: (message: string, receiverId?: string) => ({type: 'SEND-MESSAGE', message, receiverId} as const),
    addPost: (post: string) => ({type: 'ADD-POST', post: {id: v1(), message: post, likesCount: 0}} as const),
    setUserProfile: (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile} as const),
    setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const),
    setStatus: (status: string) => ({type: 'SET-STATUS', status} as const),
    setAppStatus: (appStatus: RequestStatusType) => ({type: 'SET-APP-STATUS', appStatus}  as const),
    savePhotoSuccess: (largePhotoURL: string | null, smallPhotoURL: string | null) => ({type: 'SAVE-PHOTO-SUCCESS', largePhotoURL, smallPhotoURL} as const),
    getCaptchaUrlSuccess: (url: string) => ({type: 'GET-CAPTCHA-URL-SUCCESS', url} as const),
    setAppError: (error: string | null) => ({type: 'SET-APP-ERROR', error} as const),
    setIsProfileLoading: (value: boolean) => ({type: 'SET-IS-PROFILE-LOADING', value} as const)
}

type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>