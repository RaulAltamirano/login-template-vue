import { onMounted, ref } from 'vue';

import { openDB } from 'idb';
import { AES, enc } from 'crypto-js';

import { useAuthStore } from '../store/store-auth';

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
	}

	const storeRefreshToken = async (refreshToken: string) => {
		try {
			const encryptedToken = encryptToken(refreshToken);
			const tokenData = { id: 1, refreshToken: encryptedToken };
			await db.value.put('tokens', tokenData);
			authStore.setRefreshToken(tokenData.refreshToken)
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
			iv: enc.Hex.parse('00000000000000000000000000000000'),
		});
		return encryptedToken.toString();
	}

	const decryptToken = (encryptedToken: string) => {
		const decryptedToken = AES.decrypt(encryptedToken, encryptionKey, {
			iv: enc.Hex.parse('00000000000000000000000000000000'),
		});
		return decryptedToken.toString(enc.Utf8);
	}

	onMounted(initIndexedDB)

	return {
		storeRefreshToken,
		getRefreshToken,
	};
}