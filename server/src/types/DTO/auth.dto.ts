export interface UserReponseDTO {
    userID: number;
    name: string;
    email: string;
    createdAt: Date;
}

export interface UserStatusDTO {
    userID: number;
    name: string;
    email: string;
    createdAt: Date;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface SingupDTO {
    name: string;
    email: string;
    password: string;
}