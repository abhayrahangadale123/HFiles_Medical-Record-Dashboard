module.exports = [
"[project]/app/compontes/Deshbordaaa.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DashboardPage() {
    const userId = 1; // change when auth is ready
    const API_FILES = 'https://localhost:7192/api/File';
    const API_USERS = 'https://localhost:7192/api/users';
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileForm, setProfileForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        phone: '',
        gender: ''
    });
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileType, setFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const safeImage = (url)=>{
        if (url && typeof url === 'string' && url.trim() !== '' && (url.startsWith('http') || url.startsWith('/'))) return url;
        return 'https://via.placeholder.com/150?text=User';
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchUser();
        fetchFiles();
    }, []);
    // fetch user
    const fetchUser = async ()=>{
        try {
            const res = await fetch(`${API_USERS}/${userId}`);
            if (res.ok) {
                const data = await res.json();
                setUser(data);
                setProfileForm({
                    fullName: data.fullName || '',
                    email: data.email || '',
                    phone: data.phone || '',
                    gender: data.gender || ''
                });
            } else {
                console.error('fetchUser failed', res.status);
            }
        } catch (err) {
            console.error('User fetch failed', err);
        }
    };
    // fetch files
    const fetchFiles = async ()=>{
        try {
            setLoading(true);
            const res = await fetch(`${API_FILES}/user/${userId}`);
            if (res.ok) {
                const data = await res.json();
                // backend may return isDeleted flag; filter if present
                setFiles(Array.isArray(data) ? data.filter((f)=>!f.isDeleted) : []);
            } else {
                const txt = await res.text();
                console.error('fetchFiles failed', res.status, txt);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Failed to load files');
            }
        } catch (err) {
            console.error('fetchFiles error', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Failed to load files');
        } finally{
            setLoading(false);
        }
    };
    // upload
    const handleUpload = async ()=>{
        if (!selectedFile || !fileName.trim() || !fileType) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Fill all fields');
            return;
        }
        const formData = new FormData();
        formData.append('userId', userId.toString());
        formData.append('file', selectedFile);
        formData.append('fileName', fileName.trim());
        formData.append('fileType', fileType);
        try {
            setUploading(true);
            console.log('Uploading...', selectedFile.name, {
                fileName,
                fileType,
                userId
            });
            const res = await fetch(`${API_FILES}/upload`, {
                method: 'POST',
                body: formData
            });
            const contentType = res.headers.get('content-type') || '';
            let body = null;
            if (contentType.includes('application/json')) body = await res.json();
            else body = await res.text();
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('File uploaded!');
                setSelectedFile(null);
                setFileName('');
                setFileType('');
                if (fileInputRef.current) fileInputRef.current.value = '';
                console.log('Upload success', body);
                fetchFiles();
            } else {
                console.error('Upload failed', res.status, body);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(`Upload failed: ${res.status} - ${typeof body === 'string' ? body : body?.message || ''}`);
            }
        } catch (err) {
            console.error('Upload error', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Network error during upload');
        } finally{
            setUploading(false);
        }
    };
    // delete (soft)
    const handleDelete = async (fileId)=>{
        if (!confirm('Delete this file?')) return;
        try {
            const res = await fetch(`${API_FILES}/${fileId}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('File deleted');
                setFiles(files.filter((f)=>f.id !== fileId));
            } else {
                const t = await res.text();
                console.error('Delete failed', res.status, t);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Delete failed');
            }
        } catch (err) {
            console.error('Delete error', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Delete failed');
        }
    };
    // view
    const handleView = (storedFileName)=>{
        // ensure this URL matches where backend serves files
        window.open(`https://localhost:7192/uploads/${userId}/${storedFileName}`, '_blank');
    };
    // profile update
    const handleProfileSave = async ()=>{
        try {
            const body = {
                fullName: profileForm.fullName,
                email: profileForm.email,
                phone: profileForm.phone,
                gender: profileForm.gender
            };
            const res = await fetch(`${API_USERS}/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Profile updated');
                setEditing(false);
                fetchUser();
            } else {
                const t = await res.text();
                console.error('Profile update failed', res.status, t);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Update failed');
            }
        } catch (err) {
            console.error('Profile update error', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Network error');
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-12 h-12 animate-spin text-blue-600"
            }, void 0, false, {
                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                lineNumber: 809,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
            lineNumber: 808,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-blue-700 text-white py-4 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl-inline mx-auto px-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-blue-700",
                                        children: "hfiles."
                                    }, void 0, false, {
                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                        lineNumber: 821,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                    lineNumber: 820,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                lineNumber: 819,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: [
                                            "Welcome back, ",
                                            user?.fullName || 'User',
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full overflow-hidden border-2 border-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: safeImage(user?.profileImageUrl),
                                            alt: "Profile",
                                            width: 40,
                                            height: 40,
                                            className: "object-cover",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                            lineNumber: 827,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                        lineNumber: 826,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                lineNumber: 824,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                        lineNumber: 818,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                    lineNumber: 817,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-lg p-8 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: safeImage(user?.profileImageUrl),
                                                alt: "Profile",
                                                width: 128,
                                                height: 128,
                                                className: "object-cover",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                lineNumber: 847,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this),
                                        !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold",
                                                    children: user?.fullName || 'User'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: user?.email || 'email@example.com'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 mt-2",
                                                    children: user?.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 861,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex justify-center gap-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditing(true),
                                                        className: "px-4 py-2 bg-yellow-400 rounded",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: profileForm.fullName,
                                                    onChange: (e)=>setProfileForm((p)=>({
                                                                ...p,
                                                                fullName: e.target.value
                                                            })),
                                                    placeholder: "Full name",
                                                    className: "w-full px-4 py-2 border rounded mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: profileForm.email,
                                                    onChange: (e)=>setProfileForm((p)=>({
                                                                ...p,
                                                                email: e.target.value
                                                            })),
                                                    placeholder: "Email",
                                                    className: "w-full px-4 py-2 border rounded mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 875,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: profileForm.phone,
                                                    onChange: (e)=>setProfileForm((p)=>({
                                                                ...p,
                                                                phone: e.target.value
                                                            })),
                                                    placeholder: "Phone",
                                                    className: "w-full px-4 py-2 border rounded mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: profileForm.gender,
                                                    onChange: (e)=>setProfileForm((p)=>({
                                                                ...p,
                                                                gender: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border rounded mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select gender"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Male"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Female"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                            lineNumber: 894,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleProfileSave,
                                                            className: "px-4 py-2 bg-blue-600 text-white rounded",
                                                            children: "Save"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setEditing(false),
                                                            className: "px-4 py-2 border rounded",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                            lineNumber: 900,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                    lineNumber: 845,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold mb-6 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "w-6 h-6 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Upload Medical Record"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                lineNumber: 912,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: fileType,
                                                                onChange: (e)=>setFileType(e.target.value),
                                                                className: "px-4 py-3 border rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 920,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Lab Report"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 921,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Prescription"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "X-Ray"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 923,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Other"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 924,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 919,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: fileName,
                                                                onChange: (e)=>setFileName(e.target.value),
                                                                placeholder: "File name (e.g. Blood Report Jan 2025)",
                                                                className: "px-4 py-3 border rounded-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 926,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: fileInputRef,
                                                                id: "fileInput",
                                                                type: "file",
                                                                onChange: (e)=>setSelectedFile(e.target.files?.[0] || null),
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>fileInputRef.current?.click(),
                                                                className: "px-6 py-3 border-2 border-dashed rounded-lg hover:border-blue-500 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 941,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    selectedFile?.name || 'Choose File'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 937,
                                                                columnNumber: 21
                                                            }, this),
                                                            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedFile(null);
                                                                    setFileName('');
                                                                    setFileType('');
                                                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                                                },
                                                                className: "text-red-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 946,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleUpload,
                                                                disabled: uploading || !selectedFile || !fileName || !fileType,
                                                                className: "px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2",
                                                                children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "w-5 h-5 animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 36
                                                                }, this) : 'Upload'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 951,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                lineNumber: 917,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                        lineNumber: 911,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold mb-6",
                                                children: "Your Medical Records"
                                            }, void 0, false, {
                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                lineNumber: 964,
                                                columnNumber: 17
                                            }, this),
                                            files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-gray-500 py-12",
                                                children: "No files uploaded yet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                lineNumber: 966,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-5 border rounded-xl hover:shadow transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-gray-100 p-3 rounded-lg",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "w-8 h-8 text-blue-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                            lineNumber: 973,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 972,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold",
                                                                                children: file.fileName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                                lineNumber: 976,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-500",
                                                                                children: [
                                                                                    (file.size / 1024 / 1024).toFixed(2),
                                                                                    " MB"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                                lineNumber: 977,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 975,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleView(file.storedFileName),
                                                                        className: "px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                                lineNumber: 984,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " View"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(file.id),
                                                                        className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                                lineNumber: 987,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Delete"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                        lineNumber: 986,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                                lineNumber: 982,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, file.id, true, {
                                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                                lineNumber: 968,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                        lineNumber: 963,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                        lineNumber: 841,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/compontes/Deshbordaaa.tsx",
                    lineNumber: 840,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/compontes/Deshbordaaa.tsx",
            lineNumber: 816,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=app_compontes_Deshbordaaa_tsx_60febf69._.js.map