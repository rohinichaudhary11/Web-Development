import React, { createContext, useContext, useState } from 'react';

// Create React Context for Auth State
const AuthContext = createContext();

/**
 * AuthProvider wraps the application and manages login/logout state
 * without requiring props passing down the component tree.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('username') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username'));

  const login = (username, password) => {
    if (username.trim() && password.trim()) {
      const cleanUser = username.trim();
      setUser(cleanUser);
      setIsLoggedIn(true);
      localStorage.setItem('username', cleanUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser('');
    setIsLoggedIn(false);
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to consume AuthContext directly without passing props.
 */
export function useAuth() {
  return useContext(AuthContext);
}
