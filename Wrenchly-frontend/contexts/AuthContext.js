// contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import {
  setTokens,
  getTokens,
  clearTokens,
} from "../utils/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- NEW

  // Fetch user profile if we already have a token
  useEffect(() => {
    const tokens = getTokens();
    if (tokens?.access) {
      fetchProfile(tokens.access).finally(() => {
        startTokenRefresh();
        setLoading(false); // done checking
      });
    } else {
      setLoading(false);
    }

    // Cleanup on unmount
    return () => stopTokenRefresh();
  }, []);

  // --- API calls ---
  async function fetchProfile(token) {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/accounts/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Profile fetch failed:", err);
      setUser(null);
    }
  }

  async function login(username, password) {
    const res = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    setTokens(data.access, data.refresh);
    setUser(data.user);
    startTokenRefresh();
  }

  async function signup(username, email, password) {
    const res = await fetch("http://127.0.0.1:8000/api/accounts/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (!res.ok) throw new Error("Signup failed");

    const data = await res.json();
    setTokens(data.access, data.refresh);
    setUser(data.user);
    startTokenRefresh();
  }

  function logout() {
    clearTokens();
    setUser(null);
    stopTokenRefresh();
  }

  // --- Silent refresh mechanism ---
  let refreshInterval = null;

  function startTokenRefresh() {
    if (refreshInterval) return; // prevent duplicates

    refreshInterval = setInterval(async () => {
      const tokens = getTokens();
      if (!tokens?.refresh) return;

      try {
        const res = await fetch("http://127.0.0.1:8000/api/accounts/refresh/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: tokens.refresh }),
        });

        if (res.ok) {
          const data = await res.json();
          setTokens(data.access, tokens.refresh); // update only access
          fetchProfile(data.access);
        } else {
          console.warn("Refresh token expired, logging out");
          logout();
        }
      } catch (err) {
        console.error("Token refresh failed:", err);
        logout();
      }
    }, 4 * 60 * 1000); // every 4 min
  }

  function stopTokenRefresh() {
    if (refreshInterval) {
      clearInterval(refreshInterval);
      refreshInterval = null;
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
