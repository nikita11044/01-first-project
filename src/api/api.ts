import axios from "axios";
import {IUser} from "../redux/users-reducer";

type GetUsersResponseType = {
    items: IUser[]
    totalCount: number
    error: string | null
}

type FollowingResponseType = {
    resultCode: number
    messages: string[]
    data: Object
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "34d63932-9379-4f86-a5b9-c4b335d4ab1f"
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}

export const followUser = (userId: string) => {
    return instance.post<FollowingResponseType>(`follow/${userId}`)
}

export const unfollowUser = (userId: string) => {
    return instance.delete<FollowingResponseType>(`follow/${userId}`)
}