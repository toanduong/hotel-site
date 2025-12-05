// App-wide constants

export const APP_NAME = 'Hotel Booking';
export const APP_DESCRIPTION = 'Find and book your perfect hotel stay';

// API
export const API_TIMEOUT = 10000; // 10 seconds

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 50;

// Date formats
export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_TIME_FORMAT = 'MMM dd, yyyy HH:mm';

// Currency
export const DEFAULT_CURRENCY = 'VND';

// Validation
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_GUESTS = 10;
export const MIN_BOOKING_DAYS = 1;
export const MAX_BOOKING_DAYS = 30;

// Storage keys
export const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    USER: 'user',
    SEARCH_FILTERS: 'search_filters',
    RECENT_SEARCHES: 'recent_searches',
} as const;

// Routes
export const ROUTES = {
    HOME: '/',
    HOTELS: '/hotels',
    HOTEL_DETAIL: '/hotels/[id]',
    BOOKING: '/booking',
    PROFILE: '/profile',
    LOGIN: '/login',
    REGISTER: '/register',
} as const;
