import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlyoutMenuComponent } from './flyout-menu.component';

export const menuItem = {
  name: 'Clients',
  isExpand: true,
  items: [
    {
      title: 'View My Clients',
      url: '/clients',
    },
    {
      title: ' My Jobs',
      url: '/dashboard',
    },
    {
      title: 'Messages',
      url: '/dashboard',
    },
  ],
};

describe('FlyoutMenuComponent', () => {
  const createComponent = createComponentFactory({
    component: FlyoutMenuComponent,
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [FormBuilder],
  });
  let spectator: Spectator<FlyoutMenuComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('App Data should be initialized when the component is created successfully', () => {
    expect(spectator.component.appData).toBeDefined();
    expect(spectator.component.leftMenuItems).toBeDefined();
    expect(spectator.component.menus).toBeDefined();
    expect(spectator.component.rightMenuItems).toBeDefined();
  });

  it('should call the toggleAccordion method', () => {
    spectator.component.toggleAccordion(menuItem);
    expect(spectator.component.toggleAccordion).toBeTruthy();
  });

  it('should call the Log out method', () => {
    spectator.component.logout();
    expect(spectator.component.logout).toBeTruthy();
  });
});
