import axios from "axios";

const instance = axios.create ({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "a474145a-fa64-4441-98f4-9a63ad076189"
    }
})

export const usersAPI = {
    getUsers (pageSize: number, currentPage: number)  {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`). then(response => {
            return response.data;
        })
    },
    follow (id: number) {
        return instance.post(`follow/${id}`, {})
    },
    unfollow (id: number) {
        return instance.delete(`follow/${id}`)
    },
}

export const headerAPI = {
    auth ()  {
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {
    getUserProfile (userId: string)  {
        return instance.get(`profile/${userId}`)
    }
}


