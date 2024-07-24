// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    if (localStorage.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    }

    // try {
    //   const res = await axios.get('/api/auth');
    //   setAuth({
    //     token: localStorage.getItem('token'),
    //     isAuthenticated: true,
    //     loading: false,
    //     user: res.data,
    //   });
    // } catch (err) {
    //   setAuth({
    //     token: null,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: null,
    //   });
    // }
  };

  const login = async (formData, navigate) => {
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      loadUser();
      Alert.success('Login successful');
      navigate('/'); // Redirect to dashboard or another protected route
    } catch (err) {
      Alert.error('Invalid credentials');
    }
  };

  const signup = async (formData, navigate) => {
    try {
      const res = await axios.post('/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      loadUser();
      Alert.success('Signup successful');
      navigate('/'); // Redirect to dashboard or another protected route
    } catch (err) {
      Alert.error('Signup failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null,
    });
    Alert.success('Logout successful');
    navigate('/login'); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ auth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
