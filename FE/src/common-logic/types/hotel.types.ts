import { Location } from './common.types';

export interface Hotel {
    id: string;
    name: string;
    description: string;
    location: Location;
    images: string[];
    rating: number;
    reviewCount: number;
    amenities: Amenity[];
    rooms: Room[];
    priceRange: {
        min: number;
        max: number;
    };
}

export interface Room {
    id: string;
    hotelId: string;
    name: string;
    description: string;
    images: string[];
    capacity: number;
    size: number; // in square meters
    price: number;
    amenities: Amenity[];
    availability: boolean;
}

export interface Amenity {
    id: string;
    name: string;
    icon?: string;
    category: 'room' | 'hotel' | 'general';
}

export interface SearchFilters {
    location?: string;
    checkIn?: Date;
    checkOut?: Date;
    guests?: number;
    priceRange?: {
        min: number;
        max: number;
    };
    amenities?: string[];
    rating?: number;
}
