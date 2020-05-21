import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule } from '@ionic/angular';

import { LeadsPage } from './leads.page';

describe('LeadsPage', () => {
  const createComponent = createComponentFactory({
    component: LeadsPage,
    imports: [IonicModule.forRoot()],
  });
  let spectator: Spectator<LeadsPage>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
