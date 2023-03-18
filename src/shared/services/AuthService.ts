/* eslint-disable */
import { ACCESS_TOKEN_KEY } from '../utils/store-keys';
import { storageService } from './StorageService';

class AuthService {
  logout(): void {
    storageService.remove(ACCESS_TOKEN_KEY);
  }

  getAccessToken(): string | null {
    return storageService.get(ACCESS_TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}

export const authService = new AuthService();
