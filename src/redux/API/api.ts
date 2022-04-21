import axios from "axios"


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': 'dcfcafd7-85ce-4812-a7da-28eb32543b9d' }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}


