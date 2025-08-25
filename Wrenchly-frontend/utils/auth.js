// utils/auth.js
const API_URL = "http://127.0.0.1:8000/api/accounts";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
let refreshTimeout = null;

// Save tokens and schedule background refresh
export function setTokens(accessToken, refreshToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  scheduleTokenRefresh();
}

// Get tokens
export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

// Logout user
export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  if (refreshTimeout) clearTimeout(refreshTimeout);
  window.location.href = "/login"; // redirect to login page
}

// Decode JWT payload
function decodeJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

// Refresh token
export async function refreshToken() {
  const refresh = getRefreshToken();
  if (!refresh) return null;

  try {
    const res = await fetch(`${API_URL}/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (!res.ok) {
      logout();
      return null;
    }

    const data = await res.json();
    setTokens(data.access, refresh);
    return data.access;
  } catch (err) {
    console.error("Failed to refresh token:", err);
    logout();
    return null;
  }
}

// Schedule background refresh ~1 min before expiry
function scheduleTokenRefresh() {
  if (refreshTimeout) clearTimeout(refreshTimeout);
  const token = getAccessToken();
  if (!token) return;

  const decoded = decodeJwt(token);
  if (!decoded?.exp) return;

  const refreshIn = decoded.exp * 1000 - Date.now() - 60 * 1000;
  if (refreshIn > 0) {
    refreshTimeout = setTimeout(refreshToken, refreshIn);
  }
}

// API wrapper with auto-refresh
export async function fetchWithAuth(url, options = {}) {
  let token = getAccessToken();
  options.headers = { ...(options.headers || {}), Authorization: `Bearer ${token}` };

  let res = await fetch(url, options);

  if (res.status === 401) {
    const newToken = await refreshToken();
    if (newToken) {
      options.headers.Authorization = `Bearer ${newToken}`;
      res = await fetch(url, options);
    }
  }

  return res;
}

// Login
export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  setTokens(data.access, data.refresh);
  return data;
}

// Signup
export async function signupUser(data) {
  const res = await fetch(`${API_URL}/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Signup failed");
  const dataTokens = await res.json();
  setTokens(dataTokens.access, dataTokens.refresh);
  return dataTokens;
}

// Init auth on page load
export function initAuth() {
  scheduleTokenRefresh();
}
