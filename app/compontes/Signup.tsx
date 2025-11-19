
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMessage(null);

     
    if (!fullName.trim() || !email.trim() || !password) {
      setServerMessage('Full name, email and password are required.');
      return;
    }

    const body = { fullName, email, phone, gender, password };
   const base = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const url = `${base}/api/Auth/signup`; 
    //const url = 'https://localhost:7192/api/Auth/signup'; 

    setLoading(true);
    try {
      console.log('Calling API:', url, 'body:', body);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include' // uncomment only if backend sets cookies
        body: JSON.stringify(body),
      });

      console.log('Response status:', res.status, res.statusText);

       const text = await res.text();
      let parsed: any = null;
      try {
        parsed = text ? JSON.parse(text) : null;
      } catch (e) {
        // not json
      }
      console.log('Response body (raw):', text);
      console.log('Response body (parsed):', parsed);

      if (!res.ok) {
         const msg =
          (parsed && (parsed.message || parsed.error || parsed.errors)) ||
          text ||
          `Request failed with status ${res.status}`;
        setServerMessage(String(msg));
         
        throw new Error(JSON.stringify(msg));

      }

      // success
      const token = parsed?.token;
      const user = parsed?.user;
      if (token) {
         localStorage.setItem('token', token);
        if (user) localStorage.setItem('user', JSON.stringify(user));

      }
      setServerMessage('Signup successful.');
      console.log('Signup success', parsed);
     
       router.replace('/Login');
    } catch (err: any) {
      console.error('Signup error:', err);
       if (!serverMessage) setServerMessage(err?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  }

 

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

    
<form onSubmit={handleSubmit} className="max-w-sm p-5 bg-white shadow rounded-xl space-y-3">
<h2 className="text-xl font-semibold">Sign Up</h2>


{serverMessage && (
<div className={`${serverMessage.includes('success') ? 'text-green-600' : 'text-red-600'} text-sm`}>{serverMessage}</div>
)}


<input
value={fullName}
onChange={(e) => setFullName(e.target.value)}
placeholder="Full Name"
required
className="w-full border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
/>


<input
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Email"
required
type="email"
className="w-full border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
/>


<input
value={phone}
onChange={(e) => setPhone(e.target.value)}
placeholder="Phone (optional)"
className="w-full border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
/>


<input
value={gender}
onChange={(e) => setGender(e.target.value)}
placeholder="Gender (optional)"
className="w-full border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
/>


<input
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Password"
required
type="password"
minLength={6}
className="w-full border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
/>


<button
type="submit"
disabled={loading}
className="w-full bg-indigo-600 text-white py-2 rounded mt-2 disabled:opacity-60">
{loading ? 'Registering...' : 'Sign Up'}
</button>
</form>
 </div>
);
}