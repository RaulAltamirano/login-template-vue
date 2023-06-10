export interface User {
    id: string;
    email: string;
    token: Token;
}
export interface Token {
    accessToken: string;
    refreshToken: string;
}