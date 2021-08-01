import axios from 'axios';

const api = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '97652f51-4914-4a40-995d-4ab7a1f40799',
  },
  withCredentials: true,
});

export const apiFunctions = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return api
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow: (id) => api.delete(`follow/${id}`),
  follow: (id) => api.post(`follow/${id}`),
  setCurrentPage: (page, pageSize) => {
    return api.get(`users?page=${page}&count=${pageSize}`);
  },
  auth: () => {
    return api.get('auth/me').then((response) => {
      return response.data;
    });
  },
  getProfile: (id) => {
    return api.get(`profile/${id}`).then((response) => {
      return response.data;
    });
  },
  setStatus: (status) => {
    return api.put('profile/status', { status: status }).then((response) => {
      console.log(response);
      return response;
    });
  },
  getStatus: (id) => {
    return api.get(`profile/status/${id}`).then((response) => {
      return response;
    });
  },
};
