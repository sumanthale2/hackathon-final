import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === 'sam@gmail.com') {
      setUser({ email, type: 'new' });
      return { success: true, type: 'new' };
    } else if (email === 'john@gmail.com') {
      setUser({ email, type: 'existing' });
      return { success: true, type: 'existing' };
    }
    return { success: false };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
