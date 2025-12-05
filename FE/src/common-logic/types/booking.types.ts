export interface Booking {
    id: string;
    userId: string;
    hotelId: string;
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    guests: number;
    totalPrice: number;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
    guestInfo: GuestInfo;
    paymentInfo?: PaymentInfo;
}

export enum BookingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
}

export interface GuestInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialRequests?: string;
}

export interface PaymentInfo {
    method: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
    status: 'pending' | 'completed' | 'failed';
    transactionId?: string;
    amount: number;
}

export interface BookingFormData {
    checkIn: Date;
    checkOut: Date;
    guests: number;
    guestInfo: GuestInfo;
}
