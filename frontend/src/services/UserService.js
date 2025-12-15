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
    localStorage.setItem('userRole', response.data.role);
    localStorage.setItem('userInfo', JSON.stringify({
      index: response.data.index,
      name: response.data.name,
      email: response.data.email,
      role: response.data.role
    }));
  }
  return response.data;
};

// Society Login
const loginSociety = async (loginData) => {
  const response = await apiClient.post('/society/login', loginData);
  if(response.data.token){
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('userRole', response.data.role);
    localStorage.setItem('userInfo', JSON.stringify({
      username: response.data.index,
      name: response.data.name,
      role: response.data.role
    }));
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

//society service
//create society
const createSociety = async (societyData) => {
  const response = await apiClient.post('/society', societyData);
  return response.data;
};

// Get User Role
const getUserRole = () => {
  return localStorage.getItem('userRole');
}

// Check if Admin
const isAdmin = () => {
  return getUserRole() === 'ADMIN';
}

// Check if Society
const isSociety = () => {
  return getUserRole() === 'SOCIETY';
}

export default {
  registerUser,
  loginUser,
  loginSociety,
  Logout,
  getCurrentUser,
  isAuthenticated,
  createSociety,
  getUserRole,
  isAdmin,
  isSociety
};