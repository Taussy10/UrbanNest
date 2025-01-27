import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '../appwrite/appwrite';




type propsType = {
  loggedIn: boolean,
  setLoggedIn: () => void
  user: boolean,
  setUser: () => void
  loading: boolean,
  setloading: () => void
}




// why start with capital letter ? cause we are writing jsx using it
export const AuthContext = createContext('');

const AuthProvider = ({ children }:React.ReactNode) => {
  const [loggedIn, setLoggedIn] = useState<boolean | boolean >(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        setLoggedIn(true);
        setUser(response);
      })
      .catch(() => {
        setLoggedIn(false);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useGlobalContext must be used within a GlobalProvider');

  return context;
};

export default AuthProvider
