import { apiService } from './api.service';
import { Hotel, Room, SearchFilters, PaginatedResponse } from '../types';

class HotelService {
    /**
     * Get all hotels with optional filters
     */
    async getHotels(filters?: SearchFilters, page: number = 1, limit: number = 10) {
        const params = new URLSearchParams();

        if (filters?.location) params.append('location', filters.location);
        if (filters?.checkIn) params.append('checkIn', filters.checkIn.toISOString());
        if (filters?.checkOut) params.append('checkOut', filters.checkOut.toISOString());
        if (filters?.guests) params.append('guests', filters.guests.toString());
        if (filters?.priceRange?.min) params.append('minPrice', filters.priceRange.min.toString());
        if (filters?.priceRange?.max) params.append('maxPrice', filters.priceRange.max.toString());
        if (filters?.rating) params.append('rating', filters.rating.toString());

        params.append('page', page.toString());
        params.append('limit', limit.toString());

        return apiService.get<PaginatedResponse<Hotel>>(`/hotels?${params.toString()}`);
    }

    /**
     * Get hotel by ID
     */
    async getHotelById(id: string) {
        return apiService.get<Hotel>(`/hotels/${id}`);
    }

    /**
     * Get rooms for a specific hotel
     */
    async getHotelRooms(hotelId: string) {
        return apiService.get<Room[]>(`/hotels/${hotelId}/rooms`);
    }

    /**
     * Get room by ID
     */
    async getRoomById(hotelId: string, roomId: string) {
        return apiService.get<Room>(`/hotels/${hotelId}/rooms/${roomId}`);
    }

    /**
     * Check room availability
     */
    async checkAvailability(roomId: string, checkIn: Date, checkOut: Date) {
        return apiService.post<{ available: boolean }>('/hotels/check-availability', {
            roomId,
            checkIn: checkIn.toISOString(),
            checkOut: checkOut.toISOString(),
        });
    }
}

export const hotelService = new HotelService();
