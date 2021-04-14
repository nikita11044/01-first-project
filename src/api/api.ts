import axios from "axios";
import {User} from "../redux/users-reducer";
import {UserProfileType} from "../redux/profile-reducer";

type GetUsersResponseType = {
    items: User[]
    totalCount: number
    error: string | null
}

type CommonResponseType<D> = {
    resultCode: number
    messages: string[]
    data: D
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "34d63932-9379-4f86-a5b9-c4b335d4ab1f"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow: (userId: string) => {
        return instance.post<CommonResponseType<{}>>(`follow/${userId}`)
    },
    unfollow: (userId: string) => {
        return instance.delete<CommonResponseType<{}>>(`follow/${userId}`)
    }
}

export const authAPI = {
    getAuthUserData: () => {
        return instance.get<CommonResponseType<{ id: number, email: string, login: string }>>('auth/me')
    },
    login: (email: string, password: string, rememberMe: boolean) => {
        return instance.post<CommonResponseType<{}>>('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete<CommonResponseType<{}>>('auth/login')
    }
}

export const profileAPI = {
    getUserProfile: (userId: string) => {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (data: {status: string}) => {
        return instance.put<CommonResponseType<{}>>('status', data)
    }
}