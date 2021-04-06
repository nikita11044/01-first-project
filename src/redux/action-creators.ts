import {UserProfileType} from "./profile-reducer";
import {IUser} from "./users-reducer";

export const actions = {
    followSuccess: (userID: string) => ({type: 'FOLLOW' as const, id: userID}),
    unfollowSuccess: (userID: string) => ({type: 'UNFOLLOW' as const, id: userID}),
    setUsers: (users: Array<IUser>) => ({type: 'SET-USERS' as const, users: users}),
    setCurrentPage: (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage}),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT' as const, totalCount}),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING' as const, isFetching}),
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => ({type: 'TOGGLE-FOLLOWING-IN-PROGRESS' as const, isFetching, userId}),
    sendMessage: (message: string) => ({type: 'SEND-MESSAGE' as const, message: message}),
    addPost: () => ({type: 'ADD-POST' as const}),
    updatePostText: (newText: string) => ({type: 'UPDATE-POST-TEXT' as const, newText: newText}),
    setUserProfile: (profile: UserProfileType) => ({type: 'SET-USER-PROFILE' as const, profile}),
    setData: (userID: number, email: string, login: string) => ({type: 'SET-USER-DATA' as const, data: {userID, email, login}}),
    setStatus: (status: string) => ({type: 'SET-STATUS' as const, status}),
}

type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>