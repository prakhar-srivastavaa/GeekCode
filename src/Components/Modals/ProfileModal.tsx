import React, { useState, useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCamera } from 'react-icons/fa';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

type ProfileModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

interface ProfileData {
    name: string;
    profession: string;
    bio: string;
    location: string;
    github: string;
    linkedin: string;
    profilePicture: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
    const [user] = useAuthState(auth);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [profileData, setProfileData] = useState<ProfileData>({
        name: '',
        profession: '',
        bio: '',
        location: '',
        github: '',
        linkedin: '',
        profilePicture: '/avatar.png'
    });

    // Load profile data from localStorage
    useEffect(() => {
        if (user) {
            const savedProfile = localStorage.getItem(`profile_${user.uid}`);
            if (savedProfile) {
                setProfileData(JSON.parse(savedProfile));
            }
        }
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData(prev => ({
                    ...prev,
                    profilePicture: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (user) {
            localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profileData));
            alert('Profile saved successfully!');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm' onClick={onClose}></div>
            <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4'>
                <div className='relative w-full max-w-lg bg-gradient-to-b from-green-700 to-slate-900 rounded-xl shadow-2xl animate-fadeIn'>
                    {/* Header */}
                    <div className='flex items-center justify-between p-4 border-b border-green-600/30'>
                        <h3 className='text-xl font-semibold text-white'>Edit Profile</h3>
                        <button
                            type='button'
                            className='text-gray-300 bg-transparent hover:bg-green-600/30 hover:text-white rounded-lg text-sm p-1.5 inline-flex items-center transition-colors'
                            onClick={onClose}
                        >
                            <IoClose className='h-5 w-5' />
                        </button>
                    </div>
                    
                    {/* Body */}
                    <div className='p-4 md:p-6 space-y-4 max-h-[70vh] overflow-y-auto'>
                        {/* Profile Picture */}
                        <div className='flex flex-col items-center mb-6'>
                            <div className='relative'>
                                <img
                                    src={profileData.profilePicture}
                                    alt='Profile'
                                    className='w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-lg'
                                />
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className='absolute bottom-0 right-0 bg-green-500 p-2 rounded-full hover:bg-green-400 transition-colors shadow-lg'
                                >
                                    <FaCamera className='text-white text-sm' />
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type='file'
                                    accept='image/*'
                                    className='hidden'
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <p className='text-gray-300 text-sm mt-2'>Click camera to upload photo</p>
                        </div>

                        {/* Name */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-1'>
                                Full Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={profileData.name}
                                onChange={handleInputChange}
                                placeholder='John Doe'
                                className='w-full p-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 transition-colors'
                            />
                        </div>

                        {/* Profession */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-1'>
                                Profession
                            </label>
                            <input
                                type='text'
                                name='profession'
                                value={profileData.profession}
                                onChange={handleInputChange}
                                placeholder='Software Developer'
                                className='w-full p-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 transition-colors'
                            />
                        </div>

                        {/* Bio */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-1'>
                                Bio
                            </label>
                            <textarea
                                name='bio'
                                value={profileData.bio}
                                onChange={handleInputChange}
                                placeholder='Tell us about yourself...'
                                rows={3}
                                className='w-full p-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 resize-none transition-colors'
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-1'>
                                Location
                            </label>
                            <input
                                type='text'
                                name='location'
                                value={profileData.location}
                                onChange={handleInputChange}
                                placeholder='City, Country'
                                className='w-full p-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 transition-colors'
                            />
                        </div>

                        {/* GitHub */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-1'>
                                GitHub Profile
                            </label>
                            <input
                                type='text'
                                name='github'
                                value={profileData.github}
                                onChange={handleInputChange}
                                placeholder='https://github.com/username'
                                className='w-full p-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 transition-colors'
                            />
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-1'>
                                LinkedIn Profile
                            </label>
                            <input
                                type='text'
                                name='linkedin'
                                value={profileData.linkedin}
                                onChange={handleInputChange}
                                placeholder='https://linkedin.com/in/username'
                                className='w-full p-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 transition-colors'
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='flex justify-end gap-3 p-4 border-t border-green-600/30'>
                        <button
                            onClick={onClose}
                            className='px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-600 transition-colors'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className='px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors shadow-lg shadow-green-600/30'
                        >
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileModal;
