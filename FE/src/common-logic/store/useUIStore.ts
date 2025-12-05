import { create } from 'zustand';

interface UIState {
    // Modal states
    isLoginModalOpen: boolean;
    isRegisterModalOpen: boolean;
    isBookingModalOpen: boolean;

    // Loading states
    isGlobalLoading: boolean;

    // Toast/notification
    notification: {
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
    } | null;

    // Mobile menu
    isMobileMenuOpen: boolean;

    // Actions
    openLoginModal: () => void;
    closeLoginModal: () => void;
    openRegisterModal: () => void;
    closeRegisterModal: () => void;
    openBookingModal: () => void;
    closeBookingModal: () => void;
    setGlobalLoading: (isLoading: boolean) => void;
    showNotification: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
    hideNotification: () => void;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isBookingModalOpen: false,
    isGlobalLoading: false,
    notification: null,
    isMobileMenuOpen: false,

    openLoginModal: () => set({ isLoginModalOpen: true, isRegisterModalOpen: false }),
    closeLoginModal: () => set({ isLoginModalOpen: false }),

    openRegisterModal: () => set({ isRegisterModalOpen: true, isLoginModalOpen: false }),
    closeRegisterModal: () => set({ isRegisterModalOpen: false }),

    openBookingModal: () => set({ isBookingModalOpen: true }),
    closeBookingModal: () => set({ isBookingModalOpen: false }),

    setGlobalLoading: (isLoading) => set({ isGlobalLoading: isLoading }),

    showNotification: (message, type) => set({ notification: { message, type } }),
    hideNotification: () => set({ notification: null }),

    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
