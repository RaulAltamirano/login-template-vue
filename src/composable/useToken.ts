import { ref } from 'vue';

import { openDB } from 'idb';
import { AES, enc, lib } from 'crypto-js';

export const useRefreshTokenStorage = () => {

	const db = ref<any>(null);
	const encryptionKey = 'example';

	const initIndexedDB = async () => {
		db.value = await openDB('skeleton-example', 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('tokens')) {
					db.createObjectStore('tokens', { keyPath: 'id' });
				}
			},
		});
	}

	const storeRefreshToken = async (refreshToken: string) => {
		try {
			initIndexedDB()
			const encryptedToken = encryptToken(refreshToken);
			const tokenData = { id: 1, refreshToken: encryptedToken };
			await db.value.put('tokens', tokenData);
		} catch (error) {
			console.error('Error storing refresh token:', error);
		}
	}

	const getRefreshToken = async () => {
		try {
			const tokenData = await db.value.get('tokens', 1);
			if (tokenData) {
				const decryptedToken = decryptToken(tokenData.refreshToken);
				return decryptedToken;
			}
			return null;
		} catch (error) {
			console.error('Error retrieving refresh token:', error);
			return null;
		}
	}

	const encryptToken = (token: string) => {
		const encryptedToken = AES.encrypt(token, encryptionKey, {
			iv: enc.Hex.parse(generateIV()), // Replace with a unique initialization vector (IV)
		});
		return encryptedToken.toString();
	}

	const decryptToken = (encryptedToken: string) => {
		const decryptedToken = AES.decrypt(encryptedToken, encryptionKey, {
			iv: enc.Hex.parse(generateIV()), // Replace with the same initialization vector (IV) used during encryption
		});
		return decryptedToken.toString(enc.Utf8);
	}
	const generateIV = () => {
		const iv = lib.WordArray.random(64);
		return iv.toString();
	};

	return {
		storeRefreshToken,
		getRefreshToken,
	};
}