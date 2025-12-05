'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchStore } from '@/common-logic/store';

const areaReferences = [
    'Near Airport',
    'Old Quarter',
    'City Center',
];

const tripPlans = [
    'Business Trip',
    'Longstay',
    'Staycation',
    'Workcation',
    'Leisure',
];

const popularHotels = [
    {
        name: 'Grand Plaza Hotel',
        location: 'Ho Chi Minh City',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    },
    {
        name: 'Riverside Boutique',
        location: 'Hanoi',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
    },
    {
        name: 'Beachfront Resort',
        location: 'Da Nang',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    },
];

export default function SearchBar() {
    const { filters, setFilters } = useSearchStore();
    const [location, setLocation] = useState(filters.location || '');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [showGuestsPopup, setShowGuestsPopup] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>([
        'Ho Chi Minh City',
        'Hanoi',
        'Da Nang',
    ]);
    const locationRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchBoxRef = useRef<HTMLDivElement>(null);
    const guestsRef = useRef<HTMLDivElement>(null);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0, width: 0 });

    // Update popup position when it opens
    useEffect(() => {
        const updatePosition = () => {
            if (showLocationPopup && searchBoxRef.current) {
                const rect = searchBoxRef.current.getBoundingClientRect();
                const top = rect.bottom + window.scrollY + 8;
                const left = rect.left + window.scrollX;
                const width = rect.width;
                setPopupPosition({ top, left, width });
            }
        };

        updatePosition();
    }, [showLocationPopup]);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
                setShowLocationPopup(false);
            }
            if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
                setShowGuestsPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        const totalGuests = adults + children + babies;
        setFilters({
            location,
            checkIn: checkIn ? new Date(checkIn) : undefined,
            checkOut: checkOut ? new Date(checkOut) : undefined,
            guests: totalGuests,
        });
        console.log('Searching with:', { location, checkIn, checkOut, adults, children, babies, totalGuests });
        // TODO: Navigate to search results page or trigger search
    };

    const handleLocationSelect = (locationName: string) => {
        setLocation(locationName);
        setShowLocationPopup(false);

        // Add to recent searches if not already there
        if (!recentSearches.includes(locationName)) {
            setRecentSearches([locationName, ...recentSearches.slice(0, 4)]);
        }
    };

    // Get today's date in YYYY-MM-DD format for min date
    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div ref={searchBoxRef} className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 items-end">
                    {/* Location */}
                    <div className="md:col-span-2 relative" ref={locationRef}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Where
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <input
                                ref={inputRef}
                                type="text"
                                readOnly
                                value={location || 'City, hotel name...'}
                                onClick={() => setShowLocationPopup(!showLocationPopup)}
                                placeholder="City, hotel name..."
                                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer bg-white text-primary-500"
                            />
                        </div>
                        {/* Location Popup - Fixed positioning with search box width */}
                        {showLocationPopup && (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: `${popupPosition.top}px`,
                                    left: `${popupPosition.left}px`,
                                    width: `${popupPosition.width}px`,
                                }}
                                className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-[9999] max-h-110 overflow-y-auto"
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Left Column - Current Content */}
                                    <div>
                                        {/* Recent Searches */}
                                        {recentSearches.length > 0 && (
                                            <div className="mb-6">
                                                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Recent Searches
                                                </h3>
                                                <div className="space-y-2">
                                                    {recentSearches.map((search, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleLocationSelect(search)}
                                                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3"
                                                        >
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span className="text-gray-700">{search}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Area References */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                Area References
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {areaReferences.map((area, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => handleLocationSelect(area)}
                                                        className="px-3 py-2 rounded-lg hover:bg-primary-50 hover:border-primary-500 border border-gray-200 transition-all text-sm font-medium text-gray-700 hover:text-primary-500 cursor-pointer"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Trip Plan */}
                                        <div className="mt-6">
                                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                                Trip Plan
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {tripPlans.map((plan, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => handleLocationSelect(plan)}
                                                        className="px-3 py-2 rounded-lg hover:bg-primary-50 hover:border-primary-500 border border-gray-200 transition-all text-sm font-medium text-gray-700 hover:text-primary-500 cursor-pointer"
                                                    >
                                                        {plan}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Popular Hotels */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                            Popular Hotels
                                        </h3>
                                        <div className="space-y-3">
                                            {popularHotels.map((hotel, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleLocationSelect(hotel.name)}
                                                    className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100 hover:border-primary-500"
                                                >
                                                    <img
                                                        src={hotel.image}
                                                        alt={hotel.name}
                                                        className="w-20 h-20 object-cover rounded-lg"
                                                    />
                                                    <div className="flex-1 text-left">
                                                        <h4 className="font-medium text-gray-900 text-sm mb-1">{hotel.name}</h4>
                                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            </svg>
                                                            {hotel.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Check-in Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Check-in
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                min={today}
                                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-primary-500"
                            />
                        </div>
                    </div>

                    {/* Check-out Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Check-out
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                min={checkIn || today}
                                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-primary-500"
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    <div className="relative" ref={guestsRef}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Guests
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                readOnly
                                value={`${adults + children + babies} Guest${adults + children + babies !== 1 ? 's' : ''}`}
                                onClick={() => setShowGuestsPopup(!showGuestsPopup)}
                                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer bg-white text-primary-500"
                            />
                        </div>

                        {/* Guests Popup */}
                        {showGuestsPopup && (
                            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-[9999] min-w-[400px]">
                                {/* Adults */}
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div>
                                        <div className="font-medium text-gray-900">Adults</div>
                                        <div className="text-xs text-gray-500">Above 12 years old</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setAdults(Math.max(1, adults - 1))}
                                            className="w-8 h-8 rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-50 transition-colors"
                                        >
                                            −
                                        </button>
                                        <span className="w-8 text-center font-medium text-primary-500">{adults}</span>
                                        <button
                                            onClick={() => setAdults(adults + 1)}
                                            className="w-8 h-8 rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-50 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Children */}
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div>
                                        <div className="font-medium text-gray-900">Children</div>
                                        <div className="text-xs text-gray-500">6-12 years old</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setChildren(Math.max(0, children - 1))}
                                            className="w-8 h-8 rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-50 transition-colors"
                                        >
                                            −
                                        </button>
                                        <span className="w-8 text-center font-medium text-primary-500">{children}</span>
                                        <button
                                            onClick={() => setChildren(children + 1)}
                                            className="w-8 h-8 rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-50 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Babies */}
                                <div className="flex items-center justify-between py-3">
                                    <div>
                                        <div className="font-medium text-gray-900">Babies</div>
                                        <div className="text-xs text-gray-500">Below 2 years old</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setBabies(Math.max(0, babies - 1))}
                                            className="w-8 h-8 rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-50 transition-colors"
                                        >
                                            −
                                        </button>
                                        <span className="w-8 text-center font-medium text-primary-500">{babies}</span>
                                        <button
                                            onClick={() => setBabies(babies + 1)}
                                            className="w-8 h-8 rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-50 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Find Room Button */}
                    <div>
                        <button
                            onClick={handleSearch}
                            className="w-full h-[58px] bg-primary-500 text-white px-6 rounded-lg font-semibold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >

                            Find Room
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}
