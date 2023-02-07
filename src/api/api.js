import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "bf30cfb5-e047-4e49-a3a9-8c69f6aa7296"
  }
});

export const usersAPI = {
  getUsersAPI(currentPage = 1, pageSize = 20) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true
      })
  },
  followAPI(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollowAPI(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  }
};

export const authAPI = {
  setMe() {
    return instance.get('/auth/me')
  }
}