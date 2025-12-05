// Common types used across the application

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginationParams {
    page: number;
    limit: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface DateRange {
    checkIn: Date;
    checkOut: Date;
}

export interface Location {
    latitude: number;
    longitude: number;
    address: string;
    city: string;
    country: string;
}
