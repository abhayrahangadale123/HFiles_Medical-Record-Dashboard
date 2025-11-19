// utils/auth.ts
export function getAuthToken(): string | null {
  try { return localStorage.getItem('authToken'); } catch { return null; }
}

export function getUserFromStorage(): { id: number; fullName: string; email: string } | null {
  try {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

 
function getUserId(): number | null {
  try {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    const user = JSON.parse(raw);
    const id = typeof user?.id === 'number' ? user.id : parseInt(user?.id ?? '', 10);
    return Number.isFinite(id) ? id : null;
  } catch {
    return null;
  }
}


export function logout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
   
}
