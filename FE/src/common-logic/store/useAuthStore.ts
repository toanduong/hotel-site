import { create } from 'zustand';
import { User } from '../types';
import { authService } from '../services/auth.service';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    setUser: (user: User | null) => void;
    login: (email: string, password: string) => Promise<boolean>;
    register: (data: any) => Promise<boolean>;
    logout: () => Promise<void>;
    checkAuth: () => void;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    setUser: (user) => set({
        user,
        isAuthenticated: !!user,
        error: null
    }),

    login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
            const response = await authService.login({ email, password });

            if (response.success && response.data) {
                set({
                    user: response.data.user,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });
                return true;
            } else {
                set({
                    error: response.error || 'Login failed',
                    isLoading: false
                });
                return false;
            }
        } catch (error: any) {
            set({
                error: error.message || 'Login failed',
                isLoading: false
            });
            return false;
        }
    },

    register: async (data) => {
        set({ isLoading: true, error: null });

        try {
            const response = await authService.register(data);

            if (response.success && response.data) {
                set({
                    user: response.data.user,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });
                return true;
            } else {
                set({
                    error: response.error || 'Registration failed',
                    isLoading: false
                });
                return false;
            }
        } catch (error: any) {
            set({
                error: error.message || 'Registration failed',
                isLoading: false
            });
            return false;
        }
    },

    logout: async () => {
        set({ isLoading: true });

        try {
            await authService.logout();
            set({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null
            });
        } catch (error) {
            set({ isLoading: false });
        }
    },

    checkAuth: () => {
        const user = authService.getStoredUser();
        if (user) {
            set({ user, isAuthenticated: true });
        }
    },

    clearError: () => set({ error: null }),
}));
