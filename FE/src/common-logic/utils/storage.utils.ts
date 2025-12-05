/**
 * Save data to localStorage
 */
export const setLocalStorage = <T>(key: string, value: T): void => {
    if (typeof window !== 'undefined') {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }
};

/**
 * Get data from localStorage
 */
export const getLocalStorage = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    }
    return null;
};

/**
 * Remove data from localStorage
 */
export const removeLocalStorage = (key: string): void => {
    if (typeof window !== 'undefined') {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
    }
};

/**
 * Clear all localStorage
 */
export const clearLocalStorage = (): void => {
    if (typeof window !== 'undefined') {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    }
};

// SessionStorage utilities
export const setSessionStorage = <T>(key: string, value: T): void => {
    if (typeof window !== 'undefined') {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to sessionStorage:', error);
        }
    }
};

export const getSessionStorage = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
        try {
            const item = sessionStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from sessionStorage:', error);
            return null;
        }
    }
    return null;
};
