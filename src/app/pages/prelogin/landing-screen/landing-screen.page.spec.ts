import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LandingscreenPage } from './landing-screen.page';

describe('LandingscreenPage', () => {
  const createComponent = createComponentFactory({
    component: LandingscreenPage,
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [FormBuilder],
  });
  let spectator: Spectator<LandingscreenPage>;

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
  });

  // it('should unsubscribe the backButtonSubscription method', () => {
  //   let backButtonSubscription: any;
  //   spectator.component.ionViewWillLeave();

  // });
});
