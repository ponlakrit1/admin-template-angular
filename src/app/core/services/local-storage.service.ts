import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private isLocalStorageAvailable: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isLocalStorageAvailable = isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined';
    }

    getItem(key: string): string | null {
        if (!this.isLocalStorageAvailable) {
            return null;
        }
        return localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        if (this.isLocalStorageAvailable) {
            localStorage.setItem(key, value);
        }
    }

    removeItem(key: string): void {
        if (this.isLocalStorageAvailable) {
            localStorage.removeItem(key);
        }
    }

    clear(): void {
        if (this.isLocalStorageAvailable) {
            localStorage.clear();
        }
    }
}
