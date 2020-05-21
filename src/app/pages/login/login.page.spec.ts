import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { LoginPage } from './login.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

export const validUser = {
  username: 'pro9045@yopmail.com',
  password: 'Pass@123',
};

export const blankUser = {
  username: '',
  password: '',
};

export const PasswordType = {
  Text: 'text',
  Password: 'password',
};

describe('LoginPage', () => {
  let spectator: Spectator<LoginPage>;
  const createComponent = createComponentFactory({
    component: LoginPage,
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [FormBuilder],
  });
  beforeEach(() => (spectator = createComponent()));

  describe('when initializing', () => {
    it('should create', () => {
      expect(spectator).toBeTruthy();
    });
  });

  function updateForm(userEmail, userPassword) {
    spectator.component.loginForm.controls['username'].setValue(userEmail);
    spectator.component.loginForm.controls['password'].setValue(userPassword);
  }

  it('Component successfully created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(spectator.component.submitted).toBeFalsy();
    expect(spectator.component.loginForm).toBeDefined();
    expect(spectator.component.loginForm.invalid).toBeTruthy();
  });

  it('form value should update  when u change the input', () => {
    updateForm(validUser.username, validUser.password);
    expect(spectator.component.loginForm.value).toEqual(validUser);
  });

  it('Form should be invalid if the user provides invalid username and password ', () => {
    updateForm(blankUser.username, blankUser.password);
    expect(spectator.component.loginForm.invalid).toBeTruthy();
  });

  it('should emit the toggle event  on click of passwordIcon', () => {
    spectator.component.togglePasswordVisibility();
    // expect(spectator.component.togglePasswordVisibility()).toBeTruthy();
  });

  // TODO: have to cover the togglePasswordVisibility method and LogIn method
});
