import { required } from '@rxweb/reactive-form-validators';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { Spectator, createRoutingFactory } from '@ngneat/spectator';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { ForgotpasswordPage } from './forgot-password.page';
import { FormBuilder } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/core/services/prelogin/forgot-password.service';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router, UrlSerializer } from '@angular/router';
import { ForgotpasswordPageModule } from './forgot-password.module';

describe('ForgotpasswordPage', () => {
  const createComponent = createRoutingFactory({
    component: ForgotpasswordPage,
    imports: [ForgotpasswordPageModule, IonicModule.forRoot()],
    mocks: [MenusService, AlertsService, ForgotPasswordService],
    providers: [
      FormBuilder,
      HttpClient,
      HttpHandler,
      Router,
      AlertController,
      NavController,
      UrlSerializer,
      ForgotPasswordService,
      MenusService,
    ],
  });
  let spectator: Spectator<ForgotpasswordPage>;

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  describe('when initializing', () => {
    it('should create', () => {
      expect(spectator).toBeTruthy();
    });
  });

  it('Component successfully created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(spectator.component.onReset);
    expect(spectator.component.frmForgotPassword).toBeDefined();
    expect(spectator.component.frmForgotPassword.invalid).toBeTruthy();
  });

  it('submitted should be true when onReset()', () => {
    spectator.component.onReset();
    expect(spectator.component.frmForgotPassword).toBeTruthy();
  });

  it('email field validity 1123', () => {
    // const email = spectator.component.frmForgotPassword.controls.email;
    expect(spectator.component.frmForgotPassword.controls.email.valid).toBeFalsy();

    // Email field is required
    expect(spectator.component.frmForgotPassword.controls.email.errors.required).toBeTruthy();

    // Set email to something
    spectator.component.frmForgotPassword.controls.email.setValue('test');
    expect(spectator.component.frmForgotPassword.controls.email.errors.required).toBeFalsy();
    expect(spectator.component.frmForgotPassword.controls.email.errors.invalidEmail).toBeTruthy();
  });

  it('email field validity', () => {
    expect(spectator.component.frmForgotPassword.controls.email.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const email = spectator.component.frmForgotPassword.controls.email;
    expect(email.errors.required).toBeTruthy();
  });
});
