export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthCredentials {
    email: string;
    password: string;
}

export interface RegisterData extends AuthCredentials {
    firstName: string;
    lastName: string;
    phone?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    refreshToken?: string;
}
