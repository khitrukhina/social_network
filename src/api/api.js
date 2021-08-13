import axios from 'axios';

const api = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '97652f51-4914-4a40-995d-4ab7a1f40799',
  },
  withCredentials: true,
});

export const apiFunctions = {
  getUsers: async (currentPage = 1, pageSize = 10) => {
    const response = await api.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
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
      return response;
    });
  },
  getStatus: (id) => {
    return api.get(`profile/status/${id}`).then((response) => {
      return response;
    });
  },
  login: async (email, password, rememberMe = false) => {
    const response = await api.post('/auth/login', {
      email,
      password,
      rememberMe,
    });
    return response;
  },
  logOut: () => {
    return api.delete('/auth/login').then((response) => {
      return response;
    });
  },
};
