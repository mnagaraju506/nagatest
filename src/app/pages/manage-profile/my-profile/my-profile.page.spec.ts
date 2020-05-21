import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProfilePage } from './my-profile.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CommonModule } from '@angular/common';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';

const mockUserDetails = require('assets/mock-data/users/user-details.json');

describe('MyProfilePage', () => {
  const createComponent = createComponentFactory({
    component: MyProfilePage,
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      RxReactiveFormsModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule,
      MyProfilePageRoutingModule,
    ],
    providers: [FormBuilder],
  });
  let spectator: Spectator<MyProfilePage>;

  beforeEach(() => {
    spectator = createComponent();
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
    expect(spectator.component.appData).toBeDefined();
    expect(spectator.component.formControls).toBeDefined();
    // expect(spectator.component.).toBeTruthy();
  });

  it('patch values method should be called', () => {
    spectator.component.patchFormValues(mockUserDetails);
  });

  it('saveProfile method should be called', () => {
    spectator.component.saveProfile(mockUserDetails);
  });
});
