'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Upload, FileText, Trash2, Eye, Loader2, X } from 'lucide-react';
import toast from 'react-hot-toast';

 

interface User {
    id: number;
    fullName: string;
    email: string;
    phone?: string;
    gender?: string;
    profileImageUrl?: string;
}

interface FileRecord {
    id: number;
    fileName: string;
    fileType: string;
    storedFileName: string;
    contentType: string;
    size: number;
    isDeleted?: boolean;
}

export default function DashboardPage() {
    const router = useRouter();

     
    const API_FILES = 'https://localhost:7192/api/File';  
    const API_USERS = 'https://localhost:7192/api/users';

    
    const getAuthToken = (): string | null => {
        console.log("Abhay", localStorage.getItem('authToken'));
        try { return localStorage.getItem('authToken'); } catch { return null; }
    };
    const getUserFromStorage = (): { id: number; fullName: string; email: string } | null => {
        try {
            const raw = localStorage.getItem('user');
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    };
    const logoutLocal = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        router.push('/Login');
    };

    // --- state ---
    const [userId, setUserId] = useState<number | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [editing, setEditing] = useState(false);
    const [profileForm, setProfileForm] = useState({ fullName: '', email: '', phone: '', gender: '' });

    const [files, setFiles] = useState<FileRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [fileType, setFileType] = useState('');

    const fileInputRef = useRef<HTMLInputElement | null>(null);

 
    const safeImage = (url?: string) => {
        if (url && typeof url === 'string' && url.trim() !== '' && (url.startsWith('http') || url.startsWith('/'))) return url;
        return 'https://via.placeholder.com/150?text=User';
    };

     useEffect(() => {
        const u = getUserFromStorage();
        if (!u) {
            // not logged in
            router.push('/login');
            return;
        }
        setUserId(u.id);
        setUser(u as User);
        setProfileForm({ fullName: u.fullName || '', email: u.email || '', phone: '', gender: '' });
    }, [router]);

    
    useEffect(() => {
        if (userId) {
            fetchUser();
            fetchFiles();
        }
         
    }, [userId]);

  
    const fetchUser = async () => {
        if (!userId) return;
        try {
            const token = getAuthToken();
            const res = await fetch(`${API_USERS}/${userId}`, {
                headers: token ? { Authorization: `Bearer ${token}` } : undefined,
                credentials: 'include',
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data);
                setProfileForm({
                    fullName: data.fullName || '',
                    email: data.email || '',
                    phone: data.phone || '',
                    gender: data.gender || '',
                });
            } else {
                
                if (res.status === 401 || res.status === 403) {
                    logoutLocal();
                } else {
                    console.error('fetchUser failed', res.status);
                }
            }
        } catch (err) {
            console.error('User fetch failed', err);
        }
    };

   
    const fetchFiles = async () => {
        if (!userId) return;
        try {
            setLoading(true);
            const token = getAuthToken();
            const res = await fetch(`${API_FILES}/user/${userId}`, {
                headers: token ? { Authorization: `Bearer ${token}` } : undefined,
                credentials: 'include',
            });
            if (res.ok) {
                const data = await res.json();
                setFiles(Array.isArray(data) ? (data as any[]).filter(f => !f.isDeleted) : []);
            } else {
                const txt = await res.text();
                console.error('fetchFiles failed', res.status, txt);
                toast.error('Failed to load files');
            }
        } catch (err) {
            console.error('fetchFiles error', err);
            toast.error('Failed to load files');
        } finally {
            setLoading(false);
        }
    };

    

    const handleUpload = async () => {
         
        const localUserId = userId;
        if (!localUserId || localUserId === 0) {
            return toast.error('User not logged in');
        }

         
        if (!selectedFile || !fileName.trim() || !fileType)
            return toast.error('Fill all fields before uploading');

  
        const token = getAuthToken();
        if (!token) {
            toast.error('Token missing! Login again');
            logoutLocal();
            return;
        }

         const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            setUploading(true);

         
            const uploadUrl = `https://localhost:7192/api/File/upload?userId=${userId}`;

            const res = await fetch(uploadUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`  // DO NOT add Content-Type
                },
                body: formData,
                credentials: 'include'
            });

            
            if (res.ok) {
                toast.success('File uploaded successfully!');
                setSelectedFile(null);
                setFileName('');
                setFileType('');

                if (fileInputRef.current)
                    fileInputRef.current.value = '';

                fetchFiles();
                return;
            }

            
            const text = await res.text();
            toast.error('Upload failed: ' + text);

        } catch (err) {
            console.error('Upload error:', err);
            toast.error('Network error');

        } finally {
            setUploading(false);
        }
    };

   
    const handleDelete = async (fileId: number) => {
        if (!confirm('Delete this file?')) return;
        try {
            const token = getAuthToken();
            const res = await fetch(`${API_FILES}/${fileId}`, {
                method: 'DELETE',
                headers: token ? { Authorization: `Bearer ${token}` } : undefined,
                credentials: 'include',
            });
            if (res.ok) {
                toast.success('File deleted');
                setFiles(prev => prev.filter(f => f.id !== fileId));
            } else {
                const t = await res.text();
                console.error('Delete failed', res.status, t);
                toast.error('Delete failed');
            }
        } catch (err) {
            console.error('Delete error', err);
            toast.error('Delete failed');
        }
    };

    // --- View file (open in new tab) ---
    const handleView = (storedFileName: string) => {
        // Ensure this matches your static file serving path
        window.open(`https://localhost:7192/uploads/${userId}/${storedFileName}`, '_blank');
    };

    // --- Update profile (PUT) ---
    const handleProfileSave = async () => {
        if (!userId) return;
        try {
            const body = {
                fullName: profileForm.fullName,
                email: profileForm.email,
                phone: profileForm.phone,
                gender: profileForm.gender,
            };
            const token = getAuthToken();
            const res = await fetch(`${API_USERS}/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify(body),
                credentials: 'include',
            });
            if (res.ok) {
                toast.success('Profile updated');
                setEditing(false);
                fetchUser();
                // update localStorage user copy
                const updatedUser = { ...(user || {}), fullName: body.fullName, email: body.email, phone: body.phone, gender: body.gender };
                setUser(updatedUser as User);
                localStorage.setItem('user', JSON.stringify({ id: userId, fullName: updatedUser.fullName, email: updatedUser.email }));
            } else {
                const t = await res.text();
                console.error('Profile update failed', res.status, t);
                toast.error('Update failed');
            }
        } catch (err) {
            console.error('Profile update error', err);
            toast.error('Network error');
        }
    };

 
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
            </div>
        );
    }

    
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-blue-700 text-white py-4 shadow-lg">
                <div className="max-w-7xl-inline mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white rounded-lg p-2">
                            <h1 className="text-2xl font-bold text-blue-700">hfiles.</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm">Welcome back, {user?.fullName || 'User'}!</span>
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                            <Image
                                src={safeImage(user?.profileImageUrl)}
                                alt="Profile"
                                width={40}
                                height={40}
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <button onClick={logoutLocal} className="ml-4 px-3 py-1 bg-red-500 text-white rounded">Logout</button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Profile */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                                <Image
                                    src={safeImage(user?.profileImageUrl)}
                                    alt="Profile"
                                    width={128}
                                    height={128}
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {!editing ? (
                                <>
                                    <h2 className="text-2xl font-bold">{user?.fullName || 'User'}</h2>
                                    <p className="text-gray-600">{user?.email || 'email@example.com'}</p>
                                    <p className="text-sm text-gray-500 mt-2">{user?.phone}</p>

                                    <div className="mt-4 flex justify-center gap-3">
                                        <button onClick={() => setEditing(true)} className="px-4 py-2 bg-yellow-400 rounded">Edit</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <input
                                        value={profileForm.fullName}
                                        onChange={e => setProfileForm(p => ({ ...p, fullName: e.target.value }))}
                                        placeholder="Full name"
                                        className="w-full px-4 py-2 border rounded mb-2"
                                    />
                                    <input
                                        value={profileForm.email}
                                        onChange={e => setProfileForm(p => ({ ...p, email: e.target.value }))}
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border rounded mb-2"
                                    />
                                    <input
                                        value={profileForm.phone}
                                        onChange={e => setProfileForm(p => ({ ...p, phone: e.target.value }))}
                                        placeholder="Phone"
                                        className="w-full px-4 py-2 border rounded mb-2"
                                    />
                                    <select
                                        value={profileForm.gender}
                                        onChange={e => setProfileForm(p => ({ ...p, gender: e.target.value }))}
                                        className="w-full px-4 py-2 border rounded mb-4"
                                    >
                                        <option value="">Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>

                                    <div className="flex justify-center gap-3">
                                        <button onClick={handleProfileSave} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                                        <button onClick={() => setEditing(false)} className="px-4 py-2 border rounded">Cancel</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                
                    <div className="lg:col-span-2 space-y-8">

                     
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Upload className="w-6 h-6 text-blue-600" />
                                Upload Medical Record
                            </h2>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <select value={fileType} onChange={e => setFileType(e.target.value)} className="px-4 py-3 border rounded-lg">
                                        <option value="">Select Type</option>
                                        <option>Lab Report</option>
                                        <option>Prescription</option>
                                        <option>X-Ray</option>
                                        <option>Other</option>
                                    </select>
                                    <input
                                        type="text"
                                        value={fileName}
                                        onChange={e => setFileName(e.target.value)}
                                        placeholder="File name (e.g. Blood Report Jan 2025)"
                                        className="px-4 py-3 border rounded-lg"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <input ref={fileInputRef} id="fileInput" type="file" onChange={e => setSelectedFile(e.target.files?.[0] || null)} className="hidden" />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="px-6 py-3 border-2 border-dashed rounded-lg hover:border-blue-500 flex items-center gap-2"
                                    >
                                        <Upload className="w-5 h-5" />
                                        {selectedFile?.name || 'Choose File'}
                                    </button>

                                    {selectedFile && (
                                        <button onClick={() => { setSelectedFile(null); setFileName(''); setFileType(''); if (fileInputRef.current) fileInputRef.current.value = ''; }} className="text-red-600">
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}

                                    <button
                                        onClick={handleUpload}
                                        disabled={uploading || !selectedFile || !fileName || !fileType}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Upload'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Files List */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-lg font-semibold mb-6">Your Medical Records</h3>
                            {files.length === 0 ? (
                                <p className="text-center text-gray-500 py-12">No files uploaded yet</p>
                            ) : (
                                <div className="space-y-4">
                                    {files.map(file => (
                                        <div key={file.id} className="flex items-center justify-between p-5 border rounded-xl hover:shadow transition">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-gray-100 p-3 rounded-lg">
                                                    <FileText className="w-8 h-8 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">{file.fileName}</h4>
                                                    <p className="text-sm text-gray-500">
                                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <button onClick={() => handleView(file.storedFileName)} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm flex items-center gap-2">
                                                    <Eye className="w-4 h-4" /> View
                                                </button>
                                                <button onClick={() => handleDelete(file.id)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm flex items-center gap-2">
                                                    <Trash2 className="w-4 h-4" /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
