import { ResetPasswordService } from './../../../core/services/prelogin/reset-password.service';
import { PatternValidator } from './../../../shared/validators/pattern-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { NavController } from '@ionic/angular';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { ActivatedRoute } from '@angular/router';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';
import { MessageType } from 'src/app/shared/enums/alerts.enum';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  public appData = AppMetadata;
  public frmResetPassword: FormGroup;
  public resetPasswordEmail: string;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertsService,
    private activeRoute: ActivatedRoute,
    private nav: NavController,
    private resetPasswordService: ResetPasswordService,
    private menuService: MenusService
  ) {}

  public ngOnInit(): void {
    this.menuService.disableMenu();

    // Below code is used to get the data from the route
    const paramData = this.activeRoute.params.subscribe((data) => {
      this.resetPasswordEmail = data.email;
    });
    this.createForm();
  }

  public get formcontrols(): FormGroup {
    return this.frmResetPassword as FormGroup;
  }

  public onReset(): void {
    this.resetPasswordService
      .resetPassword(
        this.resetPasswordEmail,
        this.formcontrols.controls.newPassword.value,
        this.formcontrols.controls.verificationCode.value
      )
      .subscribe(
        (resp) => {
          if (resp) {
            this.alertService.presentToast(this.appData.successResetPassword, MessageType.Success);
            this.nav.navigateBack('/login');
          } else {
            this.alertService.presentToast(this.appData.errorResetPassword, MessageType.Error);
          }
        },
        (err) => {
          this.alertService.presentToast(this.appData.errorResetPassword, MessageType.Error);
        }
      );
  }

  private createForm(): void {
    this.frmResetPassword = this.formBuilder.group(
      {
        verificationCode: ['', Validators.required],
        newPassword: ['', Validators.compose([Validators.required, PatternValidator.passwordStrength])],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('newPassword', 'confirmPassword'),
      }
    );
  }
}
