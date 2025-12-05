/**
 * Format price to currency string
 */
export const formatPrice = (price: number, currency: string = 'VND'): string => {
    if (currency === 'VND') {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(price);
};

/**
 * Calculate total price for booking
 */
export const calculateTotalPrice = (pricePerNight: number, nights: number): number => {
    return pricePerNight * nights;
};

/**
 * Calculate discount price
 */
export const calculateDiscountPrice = (originalPrice: number, discountPercent: number): number => {
    return originalPrice * (1 - discountPercent / 100);
};

/**
 * Format price range
 */
export const formatPriceRange = (min: number, max: number, currency: string = 'VND'): string => {
    return `${formatPrice(min, currency)} - ${formatPrice(max, currency)}`;
};
