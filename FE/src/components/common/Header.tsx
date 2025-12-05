'use client';

import { useState } from 'react';
import { useUIStore } from '@/common-logic/store';

const menuItems = [
    { label: 'Short Story', href: '/story' },
    { label: 'Business', href: '/business' },
    { label: 'Loyalty Program', href: '/loyalty' },
    { label: 'Our Brands', href: '/brands' },
];

const languages = [
    { code: 'EN', label: 'English' },
    { code: 'VN', label: 'Tiếng Việt' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const { openLoginModal } = useUIStore();

    const handleSignIn = () => {
        openLoginModal();
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">H</span>
                            </div>
                            <span className="text-xl font-bold text-white hidden sm:block">
                                Hotel Booking
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-white/80 font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side - Language & Auth */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                <span className="font-medium text-white">{currentLanguage}</span>
                                <svg className={`w-4 h-4 text-white transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Language Dropdown */}
                            {isLanguageOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLanguage(lang.code);
                                                setIsLanguageOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${currentLanguage === lang.code ? 'bg-primary-50 text-primary-500 font-medium' : 'text-gray-700'
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Account Button */}
                        <button
                            onClick={handleSignIn}
                            className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Sign in/ Sign up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20 py-4">
                        <nav className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* Mobile Language Selector */}
                            <div className="border-t border-gray-200 pt-4 mt-2">
                                <div className="px-2 mb-2 text-sm font-medium text-gray-500">Language</div>
                                <div className="flex gap-2 px-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLanguage(lang.code);
                                            }}
                                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentLanguage === lang.code
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {lang.code}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Auth Button */}
                            <div className="px-2 border-t border-gray-200 pt-4 mt-2">
                                <button
                                    onClick={handleSignIn}
                                    className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors text-center flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Sign in/ Sign up
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
