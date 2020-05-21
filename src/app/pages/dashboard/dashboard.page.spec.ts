import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { MenusService } from 'src/app/core/services/menus/menus.service';

describe('DashboardPage', () => {
  const createComponent = createComponentFactory({
    component: DashboardPage,
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [FormBuilder, MenusService],
  });
  let spectator: Spectator<DashboardPage>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should initialize the app data on creation of component', () => {
    expect(spectator.component.appData).toBeDefined();
  });

  it('should enable menu on ngOninit ', () => {
    spectator.component.ngOnInit();
    expect(spectator.component.ngOnInit).toBeTruthy();
  });

  // fit('should unsubscribe backButtonSubscription ', () => {
  //   spectator.component.ionViewWillLeave();
  // });
});
