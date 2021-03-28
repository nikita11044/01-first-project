import {UserProfileType} from "./profile-reducer";
import {IUser} from "./users-reducer";

export const actions = {
    follow: (userID: string) => ({type: 'FOLLOW' as const, id: userID}),
    unfollow: (userID: string) => ({type: 'UNFOLLOW' as const, id: userID}),
    setUsers: (users: Array<IUser>) => ({type: 'SET-USERS' as const, users: users}),
    setCurrentPage: (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage}),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT' as const, totalCount}),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING' as const, isFetching}),
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => ({type: 'TOGGLE-FOLLOWING-IN-PROGRESS' as const, isFetching, userId}),
    sendMessage: () => ({type: 'SEND-MESSAGE' as const}),
    updateNewMessageBody: (newMessageBody: string) => ({type: 'UPDATE-MESSAGE-BODY' as const, newMessageBody: newMessageBody}),
    addPost: () => ({type: 'ADD-POST' as const}),
    updatePostText: (newText: string) => ({type: 'UPDATE-POST-TEXT' as const, newText: newText}),
    setUserProfile: (profile: UserProfileType) => ({type: 'SET-USER-PROFILE' as const, profile}),
    setData: (userID: number, email: string, login: string) => ({type: 'SET-USER-DATA' as const, data: {userID, email, login}})
}

type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>