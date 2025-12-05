import { format, differenceInDays, addDays, parseISO } from 'date-fns';

/**
 * Format date to display string
 */
export const formatDate = (date: Date | string, formatStr: string = 'MMM dd, yyyy'): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
};

/**
 * Calculate number of nights between two dates
 */
export const calculateNights = (checkIn: Date | string, checkOut: Date | string): number => {
    const checkInDate = typeof checkIn === 'string' ? parseISO(checkIn) : checkIn;
    const checkOutDate = typeof checkOut === 'string' ? parseISO(checkOut) : checkOut;
    return differenceInDays(checkOutDate, checkInDate);
};

/**
 * Add days to a date
 */
export const addDaysToDate = (date: Date | string, days: number): Date => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return addDays(dateObj, days);
};

/**
 * Check if date is in the past
 */
export const isPastDate = (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj < new Date();
};

/**
 * Get today's date at midnight
 */
export const getTodayMidnight = (): Date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
};
