import { createContext, useState, useEffect, useContext, useMemo } from "react";
import { login as hadleLogin, logout as handlerLogout } from "../lib/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = !!token;

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth_user");
    if (storedAuth) {
      const { user, token } = JSON.parse(storedAuth);
      setUser(user || null);
      setToken(token || null);
    }
  }, []);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem("auth_user", JSON.stringify({ user, token }));
    } else {
      localStorage.removeItem("auth_user");
    }
  }, [user, token]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const { user, token } = await hadleLogin(email, password);
      setUser(user);
      setToken(token);
    } catch (error) {
      console.error("Error en el login:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await handlerLogout();
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth_user");
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      loading,
      login,
      logout,
    }),
    [user, token, isAuthenticated, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
