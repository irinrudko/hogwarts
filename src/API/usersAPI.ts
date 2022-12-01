import { instance } from './instance'
import { profileAPI } from './profileAPI'

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term?: string, friend?: boolean) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}term=${term}&friend=${friend}`)
            .then((response) => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then((response) => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then((response) => response.data)
    },
    getUserProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getUserProfile(userId)
    },
    getFriends() {
        return instance.get(`users?friend=friend`).then((response) => response.data)
    },
}
