import {UserProfileType} from "./profile-reducer";
import {User} from "./users-reducer";
import {v1} from "uuid";

export const actions = {
    followSuccess: (userID: string) => ({type: 'FOLLOW' as const, id: userID}),
    unfollowSuccess: (userID: string) => ({type: 'UNFOLLOW' as const, id: userID}),
    setUsers: (users: Array<User>) => ({type: 'SET-USERS' as const, users: users}),
    setCurrentPage: (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage}),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT' as const, totalCount}),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING' as const, isFetching}),
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => ({type: 'TOGGLE-FOLLOWING-IN-PROGRESS' as const, isFetching, userId}),
    sendMessage: (message: string) => ({type: 'SEND-MESSAGE' as const, message: message}),
    addPost: (post: string) => ({type: 'ADD-POST' as const, post: {id: v1(), message: post, likesCount: 0}}),
    setUserProfile: (profile: UserProfileType) => ({type: 'SET-USER-PROFILE' as const, profile}),
    setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'SET-USER-DATA' as const, payload: {id, email, login, isAuth}}),
    setStatus: (status: string) => ({type: 'SET-STATUS' as const, status}),
    setInitialized: () => ({type: 'SET-INITIALIZED' as const})
}

type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>