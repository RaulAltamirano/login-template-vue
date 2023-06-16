import { ref } from 'vue';
import { openDB } from 'idb';
import { AES, enc } from 'crypto-js';

import { useAuthStore } from '../store/store-auth';
import { Token } from '../interfaces/user-token';

export const useRefreshTokenStorage = () => {
	const authStore = useAuthStore();

	const db = ref<any>(null);
	const encryptionKey = 'example';

	const initIndexedDB = async () => {
		db.value = await openDB('skeleton-example', 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('tokens'))
					db.createObjectStore('tokens', { keyPath: 'id' });
			},
		});
	};
	initIndexedDB()

	const storeTokens = async (tokens: Token) => {
		const { accessToken, refreshToken } = tokens
		try {
			const encryptedAccessToken = encryptToken(accessToken);
			const encryptedRefreshToken = encryptToken(refreshToken);
			const tokenData = { id: 1, accessToken: encryptedAccessToken, refreshToken: encryptedRefreshToken };
			await db.value.put('tokens', tokenData);
			authStore.setRefreshToken(tokenData.refreshToken);
		} catch (error) {
			console.error('Error storing tokens:', error);
		}
	};

	const getTokens = async () => {
		try {
			const tokenData = await db.value.get('tokens', 1);
			if (tokenData) {
				const decryptedAccessToken = decryptToken(tokenData.accessToken);
				const decryptedRefreshToken = decryptToken(tokenData.refreshToken);
				return { accessToken: decryptedAccessToken, refreshToken: decryptedRefreshToken };
			}
			return null;
		} catch (error) {
			console.error('Error retrieving tokens:', error);
			return null;
		}
	};

	const encryptToken = (token: string) => {
		const encryptedToken = AES.encrypt(token, encryptionKey, {
			iv: enc.Hex.parse('00000000000000000000000000000000'),
		});
		return encryptedToken.toString();
	};

	const decryptToken = (encryptedToken: string) => {
		const decryptedToken = AES.decrypt(encryptedToken, encryptionKey, {
			iv: enc.Hex.parse('00000000000000000000000000000000'),
		});
		return decryptedToken.toString();
	};

	return {
		storeTokens,
		getTokens,
	};
};