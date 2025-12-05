import { create } from 'zustand';
import { Hotel, SearchFilters } from '../types';
import { hotelService } from '../services/hotel.service';

interface SearchState {
    filters: SearchFilters;
    results: Hotel[];
    isLoading: boolean;
    error: string | null;
    totalResults: number;
    currentPage: number;
    totalPages: number;

    // Actions
    setFilters: (filters: Partial<SearchFilters>) => void;
    clearFilters: () => void;
    search: (page?: number) => Promise<void>;
    setResults: (results: Hotel[]) => void;
}

const initialFilters: SearchFilters = {
    location: '',
    checkIn: undefined,
    checkOut: undefined,
    guests: 1,
    priceRange: undefined,
    amenities: [],
    rating: undefined,
};

export const useSearchStore = create<SearchState>((set, get) => ({
    filters: initialFilters,
    results: [],
    isLoading: false,
    error: null,
    totalResults: 0,
    currentPage: 1,
    totalPages: 0,

    setFilters: (newFilters) => set((state) => ({
        filters: { ...state.filters, ...newFilters }
    })),

    clearFilters: () => set({ filters: initialFilters }),

    search: async (page = 1) => {
        set({ isLoading: true, error: null, currentPage: page });

        try {
            const response = await hotelService.getHotels(get().filters, page, 10);

            if (response.success && response.data) {
                set({
                    results: response.data.data,
                    totalResults: response.data.total,
                    totalPages: response.data.totalPages,
                    isLoading: false,
                    error: null,
                });
            } else {
                set({
                    error: response.error || 'Search failed',
                    isLoading: false,
                    results: [],
                });
            }
        } catch (error: any) {
            set({
                error: error.message || 'Search failed',
                isLoading: false,
                results: [],
            });
        }
    },

    setResults: (results) => set({ results }),
}));
