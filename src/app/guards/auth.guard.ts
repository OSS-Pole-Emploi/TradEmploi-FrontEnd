import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { SettingsService } from '../services/settings.service';

type CanActivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly settingsService: SettingsService, private readonly chatService: ChatService, private readonly router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): CanActivateType {
    return new Promise((resolve) => {
      if ((!localStorage.getItem('user') || localStorage.getItem('user') == null) && (!sessionStorage.getItem('user') || sessionStorage.getItem('user') == null)) {
        this.settingsService.user.next(null);
        this.router.navigate(['/start']);
      } else {
        if (!this.settingsService.user.value || this.settingsService.user.value == null) {
          if (localStorage.getItem('user') !== null) {
            this.whenUserItemInLocalStorageIsNull();
          } else { this.whenUserItemInLocalStorageIsNotNull(); }
        } else { this.whenRoomIdIsUndefined(); }
        resolve(true);
      }
    });
  }

  private whenUserItemInLocalStorageIsNull() {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const roomId = this.chatService.createRoomId();
      this.settingsService.user.next({
        ...this.settingsService.user.value,
        firstname: user.firstname,
        role: user.role,
        language: user.language,
        roomId,
        connectionTime: user.connectionTime
      });
    } catch (error) {
      this.router.navigate(['/start']);
    }
  }

  private whenUserItemInLocalStorageIsNotNull() {
    if (sessionStorage.getItem('user') !== null) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      try {
        this.settingsService.user.next({
          ...this.settingsService.user.value,
          firstname: user.firstname,
          role: user.role,
          language: user.language,
          roomId: user.roomId,
          connectionTime: user.connectionTime
        });
      } catch (error) {
        this.router.navigate(['/start']);
      }
    } else {
      this.router.navigate(['/start']);
    }
  }

  private whenRoomIdIsUndefined() {
    if (this.settingsService.user.value && this.settingsService.user.value.roomId === undefined) {
      if (localStorage.getItem('user') !== null) {
        const user = JSON.parse(localStorage.getItem('user'));
        const roomId = this.chatService.createRoomId();
        this.settingsService.user.next({
          ...this.settingsService.user.value,
          firstname: user.firstname,
          role: user.role,
          language: user.language,
          roomId,
          connectionTime: user.connectionTime
        });
      }
    }
  }
}
