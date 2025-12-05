'use client';

import { useState } from 'react';
import HotelCard from './HotelCard';
import { Hotel } from '@/common-logic/types';

interface HotelsByCityProps {
    hotelsByCity: {
        [city: string]: Hotel[];
    };
}

const ITEMS_PER_PAGE = 6;

export default function HotelsByCity({ hotelsByCity }: HotelsByCityProps) {
    const cities = Object.keys(hotelsByCity);
    const [activeCity, setActiveCity] = useState(cities[0]);
    const [currentPage, setCurrentPage] = useState(1);

    const currentHotels = hotelsByCity[activeCity] || [];
    const totalPages = Math.ceil(currentHotels.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedHotels = currentHotels.slice(startIndex, endIndex);

    const handleCityChange = (city: string) => {
        setActiveCity(city);
        setCurrentPage(1); // Reset to first page when changing city
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of section
        window.scrollTo({ top: 800, behavior: 'smooth' });
    };

    return (
        <div>
            {/* City Tabs */}
            <div className="mb-8 overflow-x-auto">
                <div className="flex gap-3 min-w-max">
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => handleCityChange(city)}
                            className={`px-6 py-3 font-medium transition-all whitespace-nowrap rounded-lg border-2 ${activeCity === city
                                    ? 'bg-primary-500 text-white border-primary-500'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500 hover:text-primary-500'
                                }`}
                        >
                            {city}
                            <span className={`ml-2 text-sm ${activeCity === city ? 'text-white/80' : 'text-gray-500'
                                }`}>
                                ({hotelsByCity[city].length})
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Hotels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedHotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        onClick={() => console.log('Hotel clicked:', hotel.id)}
                    />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                    ? 'bg-primary-500 text-white'
                                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Results Info */}
            <div className="text-center mt-4 text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, currentHotels.length)} of {currentHotels.length} hotels in {activeCity}
            </div>
        </div>
    );
}
