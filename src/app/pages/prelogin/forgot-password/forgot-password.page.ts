import { PatternValidator } from './../../../shared/validators/pattern-validator';
import { MessageType } from 'src/app/shared/enums/alerts.enum';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { ForgotPasswordService } from 'src/app/core/services/prelogin/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  public appData = AppMetadata;
  public frmForgotPassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertsService,
    public nav: NavController,
    private forgotPasswordService: ForgotPasswordService,
    private menuService: MenusService
  ) {}

  public ngOnInit(): void {
    this.menuService.disableMenu();
    this.createForm();
  }

  public get formControls(): FormGroup {
    return this.frmForgotPassword as FormGroup;
  }

  public onReset(): void {
    this.forgotPasswordService.forgotPassword(this.formControls.controls.email.value).subscribe(
      (resp) => {
        if (resp) {
          const buttons = [
            {
              text: 'OK',
              handler: () => {
                this.nav.navigateForward(['/reset-password', this.formControls.controls.email.value]);
              },
            },
          ];
          this.alertService.presentAlert(this.appData.resetPromptMsg, buttons);
        } else {
          this.alertService.presentToast(this.appData.userDoesNotExist, MessageType.Error);
        }
      },
      (err) => {
        this.alertService.presentToast(this.appData.userDoesNotExist, MessageType.Error);
      }
    );
  }

  private createForm(): void {
    this.frmForgotPassword = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, PatternValidator.validEmail])],
    });
  }
}
