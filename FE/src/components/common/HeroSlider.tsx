'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchBar from '../search/SearchBar';

const heroImages = [
    {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
        title: 'Luxury Beach Resorts',
        subtitle: 'Discover paradise by the ocean',
    },
    {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80',
        title: 'Urban Luxury Hotels',
        subtitle: 'Experience city elegance',
    },
    {
        url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80',
        title: 'Mountain Retreats',
        subtitle: 'Escape to tranquility',
    },
    {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
        title: 'Boutique Hotels',
        subtitle: 'Unique stays with character',
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <div className="relative h-[600px] overflow-hidden">
            {/* Images */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Content */}
            <div className="relative h-full flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center text-white">
                    <div className="transition-all duration-500">
                        <p className="text-lg md:text-xl mb-2 text-white/90 animate-fade-in">
                            {heroImages[currentSlide].subtitle}
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                            {heroImages[currentSlide].title}
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl mb-8 text-white/90">
                        Discover amazing hotels for your next adventure
                    </p>

                    {/* Search Bar */}
                    <SearchBar />
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
