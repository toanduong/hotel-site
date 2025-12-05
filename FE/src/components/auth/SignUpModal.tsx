'use client';

import { useState } from 'react';
import { useUIStore } from '@/common-logic/store';

export default function SignUpModal() {
    const { isRegisterModalOpen, closeRegisterModal, openLoginModal } = useUIStore();
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        phoneNumber: '',
        countryCode: '+84',
    });

    if (!isRegisterModalOpen) return null;

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sign up with:', formData);
        // TODO: Implement sign-up logic
    };

    const handleSwitchToSignIn = () => {
        closeRegisterModal();
        openLoginModal();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={closeRegisterModal}
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

                    {/* Sign Up Form */}
                    <form onSubmit={handleSignUp} className="mt-8 space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                maxLength={500}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Phone Number with Country Code */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone number
                            </label>
                            <div className="flex gap-2">
                                {/* Country Code Selector */}
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="w-32 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="+84">🇻🇳 +84</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+44">🇬🇧 +44</option>
                                    <option value="+86">🇨🇳 +86</option>
                                    <option value="+81">🇯🇵 +81</option>
                                    <option value="+82">🇰🇷 +82</option>
                                    <option value="+65">🇸🇬 +65</option>
                                    <option value="+66">🇹🇭 +66</option>
                                    <option value="+60">🇲🇾 +60</option>
                                    <option value="+62">🇮🇩 +62</option>
                                    <option value="+63">🇵🇭 +63</option>
                                    <option value="+61">🇦🇺 +61</option>
                                </select>

                                {/* Phone Number Input */}
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    required
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Join Now Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-md mt-6"
                        >
                            Join Now
                        </button>
                    </form>

                    {/* Sign In Link */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{' '}
                        <button
                            onClick={handleSwitchToSignIn}
                            className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                        >
                            Sign In
                        </button>
                    </p>

                    {/* Privacy Policy Footer */}
                    <p className="text-center text-xs text-gray-500 mt-6">
                        By signing up, you agree to Hotel Bookings&apos;{' '}
                        <a href="/privacy" className="text-primary-500 hover:text-primary-600 underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
