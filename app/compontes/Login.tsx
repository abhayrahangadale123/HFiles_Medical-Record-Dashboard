
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const API_LOGIN = 'https://localhost:7192/api/Auth/Login';  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error('Email + password required'); return; }

    try {
      setLoading(true);
      const res = await fetch(API_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // important: allow cookie set by server (optional)
      });

      const contentType = res.headers.get('content-type') || '';
      const body = contentType.includes('application/json') ? await res.json() : null;

      if (!res.ok) {
        toast.error(body?.message || `Login failed (${res.status})`);
        return;
      }

  
      const token = body?.token;
      const user = body?.user;

      if (!token || !user) {
        toast.error('Invalid login response from server');
        return;
      }

       localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Login successful');
      router.push('/Deshbord');  
    } catch (err) {
      console.error('Login error', err);
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded p-6 shadow">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded mb-3"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
