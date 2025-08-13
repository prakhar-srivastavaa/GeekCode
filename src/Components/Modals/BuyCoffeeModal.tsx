import React from 'react';
import { IoClose, IoArrowBack } from 'react-icons/io5';
import { FaCoffee } from 'react-icons/fa';
import Image from 'next/image';

type BuyCoffeeModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const BuyCoffeeModal: React.FC<BuyCoffeeModalProps> = ({ isOpen, onClose }) => {
    const handleDone = () => {
        alert('Thank you for your payment! ☕ Your support means a lot!');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className='fixed inset-0 z-40 bg-black/70 backdrop-blur-sm' onClick={onClose}></div>
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
                <div className='relative w-full max-w-md bg-gradient-to-b from-green-700 to-slate-900 rounded-xl shadow-2xl animate-fadeIn'>
                    {/* Header */}
                    <div className='flex items-center justify-between p-4 border-b border-green-600/30'>
                        <div className='flex items-center gap-2'>
                            <FaCoffee className='text-2xl text-green-300' />
                            <h3 className='text-xl font-semibold text-white'>Buy Me a Coffee</h3>
                        </div>
                        <button
                            type='button'
                            className='text-gray-300 bg-transparent hover:bg-green-600/30 hover:text-white rounded-lg text-sm p-1.5 inline-flex items-center transition-colors'
                            onClick={onClose}
                        >
                            <IoClose className='h-5 w-5' />
                        </button>
                    </div>
                    
                    {/* Body */}
                    <div className='p-6 flex flex-col items-center'>
                        <p className='text-gray-200 text-center mb-4'>
                            If you enjoy using GeekCode and want to support the development, 
                            consider buying me a coffee! ☕
                        </p>
                        
                        {/* UPI QR Code */}
                        <div className='bg-white p-4 rounded-xl mb-4 shadow-lg'>
                            <Image 
                                src='/upi.jpg' 
                                alt='UPI QR Code' 
                                width={220} 
                                height={220}
                                className='rounded-lg'
                            />
                        </div>
                        
                        <p className='text-gray-300 text-sm text-center mb-2'>
                            Scan the QR code with any UPI app to make a payment
                        </p>
                        
                        <p className='text-green-400 text-xs text-center'>
                            Every coffee helps keep the servers running! 🙏
                        </p>
                    </div>

                    {/* Footer */}
                    <div className='flex justify-between gap-3 p-4 border-t border-green-600/30'>
                        <button
                            onClick={onClose}
                            className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-600 transition-colors'
                        >
                            <IoArrowBack />
                            Back
                        </button>
                        <button
                            onClick={handleDone}
                            className='px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors shadow-lg shadow-green-600/30'
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyCoffeeModal;
