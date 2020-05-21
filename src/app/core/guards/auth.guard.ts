import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/login/authentication.service';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private nav: NavController) {}

  public async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.authService.checkUserLogIn();
    if (!isLoggedIn) {
      this.nav.navigateRoot('landing-screen');
    }
    return isLoggedIn;
  }
}
