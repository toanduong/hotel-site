'use client';

import { useState } from 'react';

export default function ChatSupport() {
    const [isOpen, setIsOpen] = useState(false);

    const handleChatClick = () => {
        setIsOpen(!isOpen);
    };

    const handleContactClick = (type: string) => {
        console.log('Contact via:', type);
        // TODO: Implement contact functionality
        if (type === 'zalo') {
            // Open Zalo chat
            window.open('https://zalo.me/YOUR_ZALO_ID', '_blank');
        } else if (type === 'messenger') {
            // Open Messenger chat
            window.open('https://m.me/YOUR_PAGE_ID', '_blank');
        } else if (type === 'phone') {
            // Call phone
            window.location.href = 'tel:+84123456789';
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-40">
            {/* Contact Options - Show when open */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2 animate-fade-in">
                    {/* Zalo */}
                    <button
                        onClick={() => handleContactClick('zalo')}
                        className="flex items-center gap-3 bg-white rounded-full shadow-lg px-4 py-3 hover:shadow-xl transition-all hover:scale-105 group"
                    >
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.855 1.371 5.424 3.514 7.217v3.54l3.31-1.814c.846.233 1.74.357 2.676.357 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.938 12.595l-2.563-2.73-5.003 2.73 5.503-5.838 2.626 2.73 4.94-2.73-5.503 5.838z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 pr-2">Zalo</span>
                    </button>

                    {/* Messenger */}
                    <button
                        onClick={() => handleContactClick('messenger')}
                        className="flex items-center gap-3 bg-white rounded-full shadow-lg px-4 py-3 hover:shadow-xl transition-all hover:scale-105 group"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.855 1.371 5.424 3.514 7.217v3.54l3.31-1.814c.846.233 1.74.357 2.676.357 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.938 12.595l-2.563-2.73-5.003 2.73 5.503-5.838 2.626 2.73 4.94-2.73-5.503 5.838z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 pr-2">Messenger</span>
                    </button>

                    {/* Phone */}
                    <button
                        onClick={() => handleContactClick('phone')}
                        className="flex items-center gap-3 bg-white rounded-full shadow-lg px-4 py-3 hover:shadow-xl transition-all hover:scale-105 group"
                    >
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 pr-2">Phone</span>
                    </button>
                </div>
            )}

            {/* Main Chat Button */}
            <button
                onClick={handleChatClick}
                className={`w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-gray-700 hover:bg-gray-800' : 'bg-primary-500 hover:bg-primary-600'
                    }`}
                aria-label={isOpen ? 'Close chat options' : 'Open chat support'}
            >
                {isOpen ? (
                    // X Icon
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Chat Icon
                    <>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>

                        {/* Notification Badge */}
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                            1
                        </span>
                    </>
                )}
            </button>
        </div>
    );
}
