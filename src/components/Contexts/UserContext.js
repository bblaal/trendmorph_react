import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState(null);  // For storing the email after login

  const url = "http://localhost:5000";

  // Fetch user details after login
  const fetchCurrentUser = async (email) => {
    setLoading(true);
    try {
      const response = await axios.get(url + '/api/v1/users/currentUser/' + email);
      setCurrentUser(response.data.currentUser[0]);
    } catch (error) {
      console.error('Error fetching current user:', error);
      setCurrentUser(null);  // Handle user not logged in
    } finally {
      setLoading(false);
    }
  };

  // Set email after login
  const handleLogin = (email) => {
    setUserEmail(email);
    fetchCurrentUser(email);  // Fetch user data after login
  };

  return (
    <UserContext.Provider value={{ currentUser, userEmail, loading, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
