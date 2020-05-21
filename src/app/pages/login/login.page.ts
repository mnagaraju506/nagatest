import { PatternValidator } from './../../shared/validators/pattern-validator';
import { AuthenticationService } from '../../core/services/login/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { FormGroup, Validators, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { PasswordType } from 'src/app/shared/enums/password-type.enum';
import { PasswordIcon } from 'src/app/shared/enums/password-icon.enum';
import { first } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MessageType, StorageKeys } from 'src/app/shared/enums';
import { AuthToken } from 'src/app/shared/models/authenticate/auth.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public submitted = false;
  public appData = AppMetadata;
  public passwordType: string = PasswordType.Password;
  public passwordIcon: string = PasswordIcon.EyeOff;
  public loginForm: FormGroup;
  public isUserCredentialSaved = false;
  constructor(
    public authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private alertService: AlertsService,
    private nav: NavController,
    private menuService: MenusService,
    private storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.menuService.disableMenu();
    this.createForm();
    this.getuserCredentials();
  }

  // convenience getter for easy access to form fields
  public get formControls(): FormGroup {
    return this.loginForm as FormGroup;
  }

  public togglePasswordVisibility(): void {
    this.passwordType = this.passwordType === PasswordType.Text ? PasswordType.Password : PasswordType.Text;
    this.passwordIcon = this.passwordIcon === PasswordIcon.EyeOff ? PasswordIcon.Eye : PasswordIcon.EyeOff;
  }

  public onLogin(): void {
    this.authService
      .login(this.formControls.controls.username.value, this.formControls.controls.password.value)
      .pipe(first())
      .subscribe(
        (resp: AuthToken) => {
          if (resp) {
            this.authService.user = resp;
            this.storageService.setItem(StorageKeys.AuthToken, resp);
            this.nav.navigateRoot('dashboard');
          } else {
            this.alertService.presentToast(this.appData.invalidUserNamePwd, MessageType.Error);
          }
        },
        (err) => {
          this.alertService.presentToast(this.appData.invalidUserNamePwd, MessageType.Error);
        }
      );
  }

  public toggleCheckbox(): void {
    this.isUserCredentialSaved = !this.isUserCredentialSaved;
  }

  private async getuserCredentials(): Promise<void> {
    if (await this.storageService.isExists(StorageKeys.UserCredentials)) {
      this.storageService.getItem(StorageKeys.UserCredentials).then((obj) => {
        this.isUserCredentialSaved = true;
        this.loginForm.setValue({ username: obj.username, password: obj.password });
      });
    }
  }
  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, PatternValidator.validEmail])],
      password: ['', Validators.required],
    });
  }

  private ionViewWillLeave(): void {
    if (this.isUserCredentialSaved) {
      this.storageService.setItem(StorageKeys.UserCredentials, {
        username: this.formControls.controls.username.value,
        password: this.formControls.controls.password.value,
      });
    } else {
      this.storageService.removeItem(StorageKeys.UserCredentials);
    }
  }
}
