import { apiService } from './api.service';
import { User } from '../types';

class UserService {
    /**
     * Get user profile
     */
    async getUserProfile(userId: string) {
        return apiService.get<User>(`/users/${userId}`);
    }

    /**
     * Update user profile
     */
    async updateProfile(userId: string, data: Partial<User>) {
        return apiService.put<User>(`/users/${userId}`, data);
    }

    /**
     * Update user avatar
     */
    async updateAvatar(userId: string, file: File) {
        const formData = new FormData();
        formData.append('avatar', file);

        return apiService.post<{ avatarUrl: string }>(`/users/${userId}/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Change password
     */
    async changePassword(userId: string, oldPassword: string, newPassword: string) {
        return apiService.post(`/users/${userId}/change-password`, {
            oldPassword,
            newPassword,
        });
    }
}

export const userService = new UserService();
