'use client';

import { useState } from 'react';
import { useUIStore } from '@/common-logic/store';

export default function SignInModal() {
    const { isLoginModalOpen, closeLoginModal, openRegisterModal } = useUIStore();
    const [email, setEmail] = useState('');

    if (!isLoginModalOpen) return null;

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sign in with email:', email);
        // TODO: Implement sign-in logic
    };

    const handleSwitchToSignUp = () => {
        closeLoginModal();
        openRegisterModal();
    };

    const handleSocialSignIn = (provider: string) => {
        console.log('Sign in with:', provider);
        // TODO: Implement social sign-in
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={closeLoginModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">H</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                        Become a citizen to unlock more privileges!
                    </h2>

                    {/* Email Form */}
                    <form onSubmit={handleSignIn} className="mt-8">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-md"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <button
                            onClick={handleSwitchToSignUp}
                            className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                        >
                            Sign Up
                        </button>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">Or</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Social Sign In Buttons */}
                    <div className="space-y-3">
                        {/* Google */}
                        <button
                            onClick={() => handleSocialSignIn('google')}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="font-medium text-gray-700">Sign in with Google</span>
                        </button>

                        {/* Apple */}
                        <button
                            onClick={() => handleSocialSignIn('apple')}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            <span className="font-medium text-gray-700">Sign in with Apple</span>
                        </button>

                        {/* Phone */}
                        <button
                            onClick={() => handleSocialSignIn('phone')}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-medium text-gray-700">Continue with phone</span>
                        </button>
                    </div>

                    {/* Privacy Policy Footer */}
                    <p className="text-center text-xs text-gray-500 mt-6">
                        By signing up, you agree to Hotel Booking&apos;s{' '}
                        <a href="/privacy" className="text-primary-500 hover:text-primary-600 underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
