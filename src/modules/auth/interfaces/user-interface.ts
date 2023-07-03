import { Token } from "./user-token";
export interface User {
	id: string;
	email: string;
	token: Token | undefined;
	refreshToken: string
	fullName: string
}