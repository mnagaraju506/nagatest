import { BecomeBeekeeProService } from './prelogin/become-beekee-pro.service';
import { PermissionService } from './downloads/permission.service';
import { DownloadsService } from './downloads/downloads.service';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './login/authentication.service';
import { AlertsService } from './alerts/alerts.service';
import { MenusService } from './menus/menus.service';
import { ForgotPasswordService } from './prelogin/forgot-password.service';
import { ResetPasswordService } from './prelogin/reset-password.service';

@NgModule({
  providers: [
    AuthenticationService,
    DownloadsService,
    PermissionService,
    AlertsService,
    BecomeBeekeeProService,
    ForgotPasswordService,
    ResetPasswordService,
    MenusService,
  ],
})
export class ServicesModule {}
