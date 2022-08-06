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
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getUserProfile(userId)
    }
}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.get(`profile/status`, { data: { status } })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}


