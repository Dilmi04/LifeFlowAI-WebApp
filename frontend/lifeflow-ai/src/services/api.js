import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication APIs
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data)
};

// Donor APIs
export const donorAPI = {
  getAllDonors: () => api.get('/donors'),
  getDonor: (id) => api.get(`/donors/${id}`),
  updateAvailability: (isAvailable) => api.put('/donors/availability', { isAvailable }),
  getDonationHistory: () => api.get('/donors/history/me')
};

// Hospital APIs
export const hospitalAPI = {
  getAllHospitals: () => api.get('/hospitals'),
  getHospital: (id) => api.get(`/hospitals/${id}`),
  getStats: () => api.get('/hospitals/stats/me')
};

// Blood Request APIs
export const requestAPI = {
  createRequest: (requestData) => api.post('/requests', requestData),
  getAllRequests: () => api.get('/requests'),
  getRequest: (id) => api.get(`/requests/${id}`),
  updateStatus: (id, status) => api.put(`/requests/${id}/status`, { status }),
  respondToRequest: (id, response) => api.put(`/requests/${id}/respond`, response),
  getNearbyDonors: (id) => api.get(`/requests/${id}/donors`),
  cancelRequest: (id) => api.put(`/requests/${id}/cancel`)
};

export default api;