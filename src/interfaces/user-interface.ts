import { Token } from "./user-token";

export interface User {
    id: string;
    email: string;
    token: Token;
}