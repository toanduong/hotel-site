import { apiService } from './api.service';
import { AuthCredentials, RegisterData, AuthResponse, User } from '../types';

class AuthService {
    /**
     * Login user
     */
    async login(credentials: AuthCredentials) {
        const response = await apiService.post<AuthResponse>('/auth/login', credentials);

        if (response.success && response.data) {
            this.setToken(response.data.token);
            this.setUser(response.data.user);
        }

        return response;
    }

    /**
     * Register new user
     */
    async register(data: RegisterData) {
        const response = await apiService.post<AuthResponse>('/auth/register', data);

        if (response.success && response.data) {
            this.setToken(response.data.token);
            this.setUser(response.data.user);
        }

        return response;
    }

    /**
     * Logout user
     */
    async logout() {
        this.clearToken();
        this.clearUser();
        return apiService.post('/auth/logout');
    }

    /**
     * Get current user
     */
    async getCurrentUser() {
        return apiService.get<User>('/auth/me');
    }

    /**
     * Refresh token
     */
    async refreshToken(refreshToken: string) {
        const response = await apiService.post<AuthResponse>('/auth/refresh', { refreshToken });

        if (response.success && response.data) {
            this.setToken(response.data.token);
        }

        return response;
    }

    // Token management
    private setToken(token: string): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem('auth_token', token);
        }
    }

    private clearToken(): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
        }
    }

    private setUser(user: User): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    private clearUser(): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
        }
    }

    getStoredUser(): User | null {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            return userStr ? JSON.parse(userStr) : null;
        }
        return null;
    }
}

export const authService = new AuthService();
