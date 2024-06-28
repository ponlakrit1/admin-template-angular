import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    accessToken = 'access-token';

    constructor(private localStorageService: LocalStorageService) {}

    isLoggedIn(): boolean {
        return this.localStorageService.getItem(this.accessToken) != null;
    }
}