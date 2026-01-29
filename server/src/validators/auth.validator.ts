import { LoginDTO, SingupDTO } from "../types/DTO/auth.dto";

export const isLoginBody = (body: any): body is LoginDTO => {
    return (
        typeof body === "object" &&
        typeof body.email === "string" &&
        body.email.includes("@") &&
        typeof body.password === "string"
    );
}

export const isSignUpBody = (body: any): body is SingupDTO => {
    return (
        typeof body === "object" &&
        typeof body.name === "string" &&
        typeof body.email === "string" &&
        body.email.includes("@") &&
        typeof body.password === "string" &&
        body.password.length >= 6
    );
}

export const isUpdName = (body: any): body is SingupDTO => {
    return (
        typeof body === "object" &&
        typeof body.name === "string"
    );
}

export const isUpdEmail = (body: any): body is SingupDTO => {
    return (
        typeof body === "object" &&
        typeof body.email === "string" &&
        body.email.includes("@")
    );
}

export const isUpdPsw = (body: any): body is SingupDTO => {
    return (
        typeof body === "object" &&
        typeof body.oldPsw === "string" &&
        typeof body.newPsw === "string" &&
        body.newPsw.length > 6
    );
}