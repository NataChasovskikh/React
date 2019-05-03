import React from 'react';
import UserProfile from './UserProfile';
import AuthContextProvider from './context/AuthContext';
import AppBar from './AppBar';
import './App.css';

const App = () => (
  <AuthContextProvider>
    <AppBar/>
    <UserProfile/>
  </AuthContextProvider>
);

export default App;
