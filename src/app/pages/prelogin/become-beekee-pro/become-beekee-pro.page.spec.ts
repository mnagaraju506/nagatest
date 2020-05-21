import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BecomeBeekeeProPage } from './become-beekee-pro.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactUsRequest } from 'src/app/shared/models/pre-login/contact-us-request.model';
import { Roles } from 'src/app/shared/enums/roles.enum';

describe('BecomeBeekeeProPage', () => {
  const createComponent = createComponentFactory({
    component: BecomeBeekeeProPage,
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [FormBuilder],
  });
  let spectator: Spectator<BecomeBeekeeProPage>;

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
    expect(spectator.component.appData).toBeDefined();
    expect(spectator.component.formControls).toBeDefined();
  });

  it('should create frmBecomeBKPro form when CreateForm method', () => {
    spectator.component.onBecomeBKPro();
  });
});
