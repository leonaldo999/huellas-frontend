function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

export default function useAuth() {
  const token = localStorage.getItem("token");
  const payload = token ? parseJwt(token) : null;
  const isExpired = payload?.exp * 1000 < Date.now();
  const isAdmin = payload?.isAdmin;

  return {
    isAuthenticated: !!token && !isExpired,
    isAdmin,
  };
}