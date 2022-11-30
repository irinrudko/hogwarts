import { instance } from './instance'

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.get(`profile/status`, { data: { status } })
    },
}
