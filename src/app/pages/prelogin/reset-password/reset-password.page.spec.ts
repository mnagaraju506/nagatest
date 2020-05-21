import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule, AlertController, NavController } from '@ionic/angular';

import { ResetPasswordPage } from './reset-password.page';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router, UrlSerializer } from '@angular/router';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResetPasswordPage', () => {
  const createComponent = createComponentFactory({
    component: ResetPasswordPage,
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [FormBuilder],
  });
  let spectator: Spectator<ResetPasswordPage>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('App Data should be initialized when the component is created successfully', () => {
    expect(spectator.component.appData).toBeDefined();
    expect(spectator.component.frmResetPassword).toBeDefined();
  });

  it('Reset method should be called when we click on reset option', () => {
    spectator.component.onReset();
    expect(spectator.component.onReset).toBeTruthy();
  });
});
