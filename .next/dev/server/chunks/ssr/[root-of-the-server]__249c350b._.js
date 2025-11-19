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
"[project]/app/compontes/Deshbord.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Upload, FileText, Trash2, Eye, Loader2, X } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// interface User {
//   id: number;
//   fullName: string;
//   email: string;
//   phone: string;
//   gender: string;
//   profileImageUrl?: string;
// }
// interface FileRecord {
//   id: number;
//   fileName: string;
//   fileType: string;
//   storedFileName: string;
//   contentType: string;
//   size: number;
//   uploadDate: string;
//   isDeleted: boolean;
// }
// export default function DashboardPage() {
//   const userId = 1; // Baad mein login se aayega
//   const [user, setUser] = useState<User | null>(null);
//   const [files, setFiles] = useState<FileRecord[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   // Upload form
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [fileName, setFileName] = useState('');
//   const [fileType, setFileType] = useState('');
//   const API_BASE = 'https://localhost:7192/api/File'; // Tumhara API base URL
//   // Fetch User + Files
//   useEffect(() => {
//     fetchUser();
//     fetchFiles();
//   }, []);
//   const fetchUser = async () => {
//     try {
//       const res = await fetch('https://localhost:7192/api/users/1');
//       if (res.ok) {
//         const data = await res.json();
//         setUser(data);
//       }
//     } catch (err) {
//       console.error("User fetch failed", err);
//     }
//   };
//   const fetchFiles = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${API_BASE}/user/${userId}`);
//       if (res.ok) {
//         const data = await res.json();
//         setFiles(data.filter((f: FileRecord) => !f.isDeleted));
//       }
//     } catch (err) {
//       toast.error('Failed to load files');
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Upload File
//   const handleUpload = async () => {
//     if (!selectedFile || !fileName || !fileType) {
//       toast.error('Please fill all fields');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('userId', userId.toString());
//     formData.append('file', selectedFile);
//     try {
//       setUploading(true);
//       const res = await fetch(`${API_BASE}/upload`, {
//         method: 'POST',
//         body: formData,
//       });
//       if (res.ok) {
//         const result = await res.json();
//         toast.success('File uploaded successfully!');
//         setSelectedFile(null);
//         setFileName('');
//         setFileType('');
//         document.getElementById('fileInput')?.click(); // reset input
//         fetchFiles(); // refresh list
//       } else {
//         toast.error('Upload failed');
//       }
//     } catch (err) {
//       toast.error('Upload error');
//     } finally {
//       setUploading(false);
//     }
//   };
//   // Delete File
//   const handleDelete = async (fileId: number) => {
//     if (!confirm('Are you sure you want to delete this file?')) return;
//     try {
//       const res = await fetch(`${API_BASE}/${fileId}`, { method: 'DELETE' });
//       if (res.ok) {
//         toast.success('File deleted');
//         setFiles(files.filter(f => f.id !== fileId));
//       } else {
//         toast.error('Delete failed');
//       }
//     } catch (err) {
//       toast.error('Network error');
//     }
//   };
//   // View / Download File
//   const handleView = (storedFileName: string, originalName: string) => {
//     const url = `https://localhost:7256/uploads/${userId}/${storedFileName}`;
//     window.open(url, '_blank');
//   };
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
//       </div>
//     );
//   }
//   return (
//     <>
//       <Toaster position="top-right" />
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <header className="bg-blue-700 text-white py-4 shadow-lg">
//           <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="bg-white rounded-lg p-2">
//                 <h1 className="text-2xl font-bold text-blue-700">hfiles.</h1>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-sm">Welcome back, {user?.fullName}!</span>
//               <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
//                 <Image
//                   src={user?.profileImageUrl || "/api/placeholder/40/40"}
//                   alt="User"
//                   width={40}
//                   height={40}
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </header>
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Profile */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
//                 <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4">
//                   <Image
//                     src={user?.profileImageUrl || "/api/placeholder/128/128"}
//                     alt="Profile"
//                     width={128}
//                     height={128}
//                     className="object-cover"
//                   />
//                 </div>
//                 <h2 className="text-2xl font-bold">{user?.fullName}</h2>
//                 <p className="text-gray-600">{user?.email}</p>
//                 <p className="text-sm text-gray-500 mt-2">ID: {userId}</p>
//               </div>
//             </div>
//             {/* Upload & Files */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Upload Form */}
//               <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//                 <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <Upload className="w-6 h-6 text-blue-600" />
//                   Upload Medical Record
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <select
//                       value={fileType}
//                       onChange={(e) => setFileType(e.target.value)}
//                       className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">Select Type</option>
//                       <option>Lab Report</option>
//                       <option>Prescription</option>
//                       <option>X-Ray</option>
//                       <option>Discharge Summary</option>
//                       <option>Other</option>
//                     </select>
//                     <input
//                       type="text"
//                       value={fileName}
//                       onChange={(e) => setFileName(e.target.value)}
//                       placeholder="Enter file name (e.g. Blood Test Jan 2025)"
//                       className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <input
//                       id="fileInput"
//                       type="file"
//                       onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
//                       className="hidden"
//                     />
//                     <button
//                       onClick={() => document.getElementById('fileInput')?.click()}
//                       className="px-6 py-3 border-2 border-dashed border-gray-400 rounded-lg hover:border-blue-500 transition flex items-center gap-2"
//                     >
//                       <Upload className="w-5 h-5" />
//                       {selectedFile ? selectedFile.name : 'Choose File'}
//                     </button>
//                     {selectedFile && (
//                       <button
//                         onClick={() => {
//                           setSelectedFile(null);
//                           setFileName('');
//                           setFileType('');
//                         }}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         <X className="w-5 h-5" />
//                       </button>
//                     )}
//                     <button
//                       onClick={handleUpload}
//                       disabled={uploading || !selectedFile || !fileName || !fileType}
//                       className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
//                     >
//                       {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Upload'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Files List */}
//               <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//                 <h3 className="text-lg font-semibold mb-4">Your Medical Records</h3>
//                 {files.length === 0 ? (
//                   <p className="text-center text-gray-500 py-12">No files uploaded yet.</p>
//                 ) : (
//                   <div className="space-y-4">
//                     {files.map((file) => (
//                       <div key={file.id} className="flex items-center justify-between p-5 border rounded-xl hover:shadow-md transition">
//                         <div className="flex items-center gap-4">
//                           <div className="bg-gray-100 p-3 rounded-lg">
//                             <FileText className="w-8 h-8 text-blue-600" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold">{file.fileName}</h4>
//                             <p className="text-sm text-gray-500">
//                               {file.fileType} • {(file.size / 1024 / 1024).toFixed(2)} MB
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex gap-3">
//                           <button
//                             onClick={() => handleView(file.storedFileName, file.fileName)}
//                             className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm flex items-center gap-2"
//                           >
//                             <Eye className="w-4 h-4" />
//                             View
//                           </button>
//                           <button
//                             onClick={() => handleDelete(file.id)}
//                             className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm flex items-center gap-2"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// app/dashboard/page.tsx   (ya app/components/Dashboard.tsx – jahan bhi hai)
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Upload, FileText, Trash2, Eye, Loader2, X } from 'lucide-react';
// import toast from 'react-hot-toast';
// interface User {
//   id: number;
//   fullName: string;
//   email: string;
//   phone?: string;
//   gender?: string;
//   profileImageUrl?: string;
// }
// interface FileRecord {
//   id: number;
//   fileName: string;
//   fileType: string;
//   storedFileName: string;
//   contentType: string;
//   size: number;
// }
// export default function DashboardPage() {
//   const userId = 1;
//   const API_BASE = 'https://localhost:7192/api/files'; // ← Apna port change kar dena
//   const [user, setUser] = useState<User | null>(null);
//   const [files, setFiles] = useState<FileRecord[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [fileName, setFileName] = useState('');
//   const [fileType, setFileType] = useState('');
//   // Safe image function (zero crash)
//   const safeImage = (url?: string) => {
//     if (url && typeof url === 'string' && url.trim() !== '' && url.startsWith('http')) {
//       return url;
//     }
//     return 'https://via.placeholder.com/150?text=User';
//   };
//   useEffect(() => {
//     fetchUser();
//     fetchFiles();
//   }, []);
//   const fetchUser = async () => {
//     try {
//       const res = await fetch('https://localhost:7192/api/users/1');
//       if (res.ok) {
//         const data = await res.json();
//         setUser(data);
//       }
//     } catch (err) {
//       console.log('User fetch failed');
//     }
//   };
//   const fetchFiles = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${API_BASE}/user/${userId}`);
//       if (res.ok) {
//         const data = await res.json();
//         // setFiles(data.filter((f: FileRecord) => !f.isDeleted));
//       }
//     } catch (err) {
//       toast.error('Failed to load files');
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleUpload = async () => {
//     if (!selectedFile || !fileName.trim() || !fileType) {
//       toast.error('Fill all fields');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('userId', userId.toString());
//     formData.append('file', selectedFile);
//     try {
//       setUploading(true);
//       const res = await fetch(`${API_BASE}/upload`, {
//         method: 'POST',
//         body: formData,
//       });
//       if (res.ok) {
//         toast.success('File uploaded!');
//         setSelectedFile(null);
//         setFileName('');
//         setFileType('');
//         // (document.getElementById('fileInput') as any)?.value = '';
//         fetchFiles();
//       } else {
//         toast.error('Upload failed');
//       }
//     } catch (err) {
//       toast.error('Network error');
//     } finally {
//       setUploading(false);
//     }
//   };
//   const handleDelete = async (fileId: number) => {
//     if (!confirm('Delete this file?')) return;
//     try {
//       const res = await fetch(`${API_BASE}/${fileId}`, { method: 'DELETE' });
//       if (res.ok) {
//         toast.success('File deleted');
//         setFiles(files.filter(f => f.id !== fileId));
//       }
//     } catch (err) {
//       toast.error('Delete failed');
//     }
//   };
//   const handleView = (storedFileName: string) => {
//     window.open(`https://localhost:7192/uploads/${userId}/${storedFileName}`, '_blank');
//   };
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
//       </div>
//     );
//   }
//   return (
//     <>
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <header className="bg-blue-700 text-white py-4 shadow-lg">
//           <div className="max-w-7xl-inline mx-auto px-6 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="bg-white rounded-lg p-2">
//                 <h1 className="text-2xl font-bold text-blue-700">hfiles.</h1>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-sm">Welcome back, {user?.fullName || 'User'}!</span>
//               <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
//                 <Image
//                   src={safeImage(user?.profileImageUrl)}
//                   alt="Profile"
//                   width={40}
//                   height={40}
//                   className="object-cover"
//                   unoptimized
//                 />
//               </div>
//             </div>
//           </div>
//         </header>
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Profile */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                 <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4">
//                   <Image
//                     src={safeImage(user?.profileImageUrl)}
//                     alt="Profile"
//                     width={128}
//                     height={128}
//                     className="object-cover"
//                     unoptimized
//                   />
//                 </div>
//                 <h2 className="text-2xl font-bold">{user?.fullName || 'User'}</h2>
//                 <p className="text-gray-600">{user?.email || 'email@example.com'}</p>
//               </div>
//             </div>
//             {/* Upload + Files */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Upload */}
//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <Upload className="w-6 h-6 text-blue-600" />
//                   Upload Medical Record
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <select value={fileType} onChange={e => setFileType(e.target.value)} className="px-4 py-3 border rounded-lg">
//                       <option value="">Select Type</option>
//                       <option>Lab Report</option>
//                       <option>Prescription</option>
//                       <option>X-Ray</option>
//                       <option>Other</option>
//                     </select>
//                     <input
//                       type="text"
//                       value={fileName}
//                       onChange={e => setFileName(e.target.value)}
//                       placeholder="File name (e.g. Blood Report Jan 2025)"
//                       className="px-4 py-3 border rounded-lg"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <input id="fileInput" type="file" onChange={e => setSelectedFile(e.target.files?.[0] || null)} className="hidden" />
//                     <button
//                       onClick={() => document.getElementById('fileInput')?.click()}
//                       className="px-6 py-3 border-2 border-dashed rounded-lg hover:border-blue-500 flex items-center gap-2"
//                     >
//                       <Upload className="w-5 h-5" />
//                       {selectedFile?.name || 'Choose File'}
//                     </button>
//                     {selectedFile && (
//                       <button onClick={() => { setSelectedFile(null); setFileName(''); setFileType(''); }} className="text-red-600">
//                         <X className="w-5 h-5" />
//                       </button>
//                     )}
//                     <button
//                       onClick={handleUpload}
//                       disabled={uploading || !selectedFile || !fileName || !fileType}
//                       className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
//                     >
//                       {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Upload'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Files List */}
//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <h3 className="text-lg font-semibold mb-6">Your Medical Records</h3>
//                 {files.length === 0 ? (
//                   <p className="text-center text-gray-500 py-12">No files uploaded yet</p>
//                 ) : (
//                   <div className="space-y-4">
//                     {files.map(file => (
//                       <div key={file.id} className="flex items-center justify-between p-5 border rounded-xl hover:shadow transition">
//                         <div className="flex items-center gap-4">
//                           <div className="bg-gray-100 p-3 rounded-lg">
//                             <FileText className="w-8 h-8 text-blue-600" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold">{file.fileName}</h4>
//                             <p className="text-sm text-gray-500">
//                               {(file.size / 1024 / 1024).toFixed(2)} MB
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex gap-3">
//                           <button onClick={() => handleView(file.storedFileName)} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm flex items-center gap-2">
//                             <Eye className="w-4 h-4" /> View
//                           </button>
//                           <button onClick={() => handleDelete(file.id)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm flex items-center gap-2">
//                             <Trash2 className="w-4 h-4" /> Delete
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
}),
"[project]/app/Deshbord/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeshbordPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$compontes$2f$Deshbord$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/compontes/Deshbord.tsx [app-rsc] (ecmascript)");
;
;
function DeshbordPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$compontes$2f$Deshbord$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/Deshbord/page.tsx",
            lineNumber: 6,
            columnNumber: 8
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Deshbord/page.tsx",
        lineNumber: 5,
        columnNumber: 6
    }, this);
}
}),
"[project]/app/Deshbord/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/Deshbord/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__249c350b._.js.map