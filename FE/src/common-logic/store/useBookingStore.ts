import { create } from 'zustand';
import { Booking, BookingFormData } from '../types';
import { bookingService } from '../services/booking.service';

interface BookingState {
    currentBooking: Partial<Booking> | null;
    bookings: Booking[];
    isLoading: boolean;
    error: string | null;

    // Actions
    setCurrentBooking: (booking: Partial<Booking>) => void;
    createBooking: (hotelId: string, roomId: string, data: BookingFormData) => Promise<boolean>;
    getUserBookings: (userId: string) => Promise<void>;
    cancelBooking: (bookingId: string) => Promise<boolean>;
    clearCurrentBooking: () => void;
    clearError: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
    currentBooking: null,
    bookings: [],
    isLoading: false,
    error: null,

    setCurrentBooking: (booking) => set({ currentBooking: booking }),

    createBooking: async (hotelId, roomId, data) => {
        set({ isLoading: true, error: null });

        try {
            const response = await bookingService.createBooking(hotelId, roomId, data);

            if (response.success && response.data) {
                set({
                    currentBooking: response.data,
                    isLoading: false,
                    error: null,
                });
                return true;
            } else {
                set({
                    error: response.error || 'Booking failed',
                    isLoading: false,
                });
                return false;
            }
        } catch (error: any) {
            set({
                error: error.message || 'Booking failed',
                isLoading: false,
            });
            return false;
        }
    },

    getUserBookings: async (userId) => {
        set({ isLoading: true, error: null });

        try {
            const response = await bookingService.getUserBookings(userId);

            if (response.success && response.data) {
                set({
                    bookings: response.data,
                    isLoading: false,
                    error: null,
                });
            } else {
                set({
                    error: response.error || 'Failed to fetch bookings',
                    isLoading: false,
                });
            }
        } catch (error: any) {
            set({
                error: error.message || 'Failed to fetch bookings',
                isLoading: false,
            });
        }
    },

    cancelBooking: async (bookingId) => {
        set({ isLoading: true, error: null });

        try {
            const response = await bookingService.cancelBooking(bookingId);

            if (response.success) {
                // Update bookings list
                set((state) => ({
                    bookings: state.bookings.map((b) =>
                        b.id === bookingId ? { ...b, status: 'cancelled' as any } : b
                    ),
                    isLoading: false,
                    error: null,
                }));
                return true;
            } else {
                set({
                    error: response.error || 'Failed to cancel booking',
                    isLoading: false,
                });
                return false;
            }
        } catch (error: any) {
            set({
                error: error.message || 'Failed to cancel booking',
                isLoading: false,
            });
            return false;
        }
    },

    clearCurrentBooking: () => set({ currentBooking: null }),

    clearError: () => set({ error: null }),
}));
