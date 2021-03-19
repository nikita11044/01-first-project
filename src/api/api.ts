import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "34d63932-9379-4f86-a5b9-c4b335d4ab1f"
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}

export const followUser = (userId: string) => {
    return instance.post(`follow/${userId}`)
}

export const unfollowUser = (userId: string) => {
    return instance.delete(`follow/${userId}`)
}