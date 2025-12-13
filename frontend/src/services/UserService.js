import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
    headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
apiClient.interceptors.request.use(
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

//api calls

// User Registration
const registerUser = async (userData) => {
  const response = await apiClient.post('/user', userData);
  return response.data;
};

// User Login
const loginUser = async (loginData) => {
  const response = await apiClient.post('/user/login', loginData);
   if(response.data.token){
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('userInfo', JSON.stringify(response.data.user));
  }
  return response.data;
};

// User Logout
const Logout = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('userInfo');
}

// Get Current User
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('userInfo'));
}

// Check if User is Authenticated
const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null;
}

export default {
  registerUser,
  loginUser,
  Logout,
  getCurrentUser,
  isAuthenticated
};