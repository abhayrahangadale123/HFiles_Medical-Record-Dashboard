module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/compontes/Signup.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// export default function Signup() {
//   const router = useRouter();
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [serverMessage, setServerMessage] = useState<string | null>(null);
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setServerMessage(null);
//     // simple front validation (helps avoid 400 for missing required fields)
//     if (!fullName.trim() || !email.trim() || !password) {
//       setServerMessage('Full name, email and password are required.');
//       return;
//     }
//     const body = { fullName, email, phone, gender, password };
//    const base = process.env.NEXT_PUBLIC_API_BASE_URL || '';
// const url = `${base}/api/Auth/signup`; 
//     setLoading(true);
//     try {
//       console.log('Calling API:', url, 'body:', body);
//       const res = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // credentials: 'include' // uncomment only if backend sets cookies
//         body: JSON.stringify(body),
//       });
//       console.log('Response status:', res.status, res.statusText);
//       // try parse as json first, fallback to text
//       const text = await res.text();
//       let parsed: any = null;
//       try {
//         parsed = text ? JSON.parse(text) : null;
//       } catch (e) {
//         // not json
//       }
//       console.log('Response body (raw):', text);
//       console.log('Response body (parsed):', parsed);
//       if (!res.ok) {
//         // If backend returns { message: "..." } show that. Otherwise show raw text/status.
//         const msg =
//           (parsed && (parsed.message || parsed.error || parsed.errors)) ||
//           text ||
//           `Request failed with status ${res.status}`;
//         setServerMessage(String(msg));
//         // throw new Error(msg);
//         throw new Error(JSON.stringify(msg));
//       }
//       // success
//       const token = parsed?.token;
//       const user = parsed?.user;
//       if (token) {
//         // dev approach: store token in localStorage (not for production)
//         localStorage.setItem('token', token);
//         if (user) localStorage.setItem('user', JSON.stringify(user));
//       }
//       setServerMessage('Signup successful.');
//       console.log('Signup success', parsed);
//       // redirect to login or dashboard
//     //   router.push('/login');
//        router.replace('/login');
//     } catch (err: any) {
//       console.error('Signup error:', err);
//       // serverMessage already set above for non-ok; ensure we show something
//       if (!serverMessage) setServerMessage(err?.message || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 420, padding: 20 }}>
//       <h2>Sign Up</h2>
//       {serverMessage && (
//         <div style={{ marginBottom: 12, color: serverMessage.includes('success') ? 'green' : 'red' }}>
//           {serverMessage}
//         </div>
//       )}
//       <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
//       <div style={{ marginTop: 8 }}>
//         <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required type="email" />
//       </div>
//       <div style={{ marginTop: 8 }}>
//         <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" />
//       </div>
//       <div style={{ marginTop: 8 }}>
//         <input value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender (optional)" />
//       </div>
//       <div style={{ marginTop: 8 }}>
//         <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required type="password" minLength={6} />
//       </div>
//       <div style={{ marginTop: 12 }}>
//         <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Sign Up'}</button>
//       </div>
//     </form>
//   );
// }
}),
"[project]/app/Singup/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignUpPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$compontes$2f$Signup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/compontes/Signup.tsx [app-rsc] (ecmascript)");
;
;
function SignUpPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: 24
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$compontes$2f$Signup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/Singup/page.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Singup/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Singup/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/Singup/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d4c082d._.js.map