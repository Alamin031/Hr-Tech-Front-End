import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken') || null);

  // Function to set the user token upon successful login
  const login = (token) => {
    setUserToken(token);
    localStorage.setItem('userToken', token);
  };

  // Function to clear the user token upon logout
  const logout = () => {
    setUserToken(null);
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
