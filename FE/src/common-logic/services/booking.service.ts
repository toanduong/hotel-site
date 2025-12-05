import { apiService } from './api.service';
import { Booking, BookingFormData } from '../types';

class BookingService {
    /**
     * Create a new booking
     */
    async createBooking(hotelId: string, roomId: string, bookingData: BookingFormData) {
        return apiService.post<Booking>('/bookings', {
            hotelId,
            roomId,
            ...bookingData,
            checkIn: bookingData.checkIn.toISOString(),
            checkOut: bookingData.checkOut.toISOString(),
        });
    }

    /**
     * Get user's bookings
     */
    async getUserBookings(userId: string) {
        return apiService.get<Booking[]>(`/bookings/user/${userId}`);
    }

    /**
     * Get booking by ID
     */
    async getBookingById(id: string) {
        return apiService.get<Booking>(`/bookings/${id}`);
    }

    /**
     * Cancel a booking
     */
    async cancelBooking(id: string) {
        return apiService.put<Booking>(`/bookings/${id}/cancel`);
    }

    /**
     * Update booking
     */
    async updateBooking(id: string, data: Partial<BookingFormData>) {
        return apiService.put<Booking>(`/bookings/${id}`, data);
    }
}

export const bookingService = new BookingService();
