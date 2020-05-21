import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule } from '@ionic/angular';

import { ClientsPage } from './clients.page';

describe('ClientsPage', () => {
  const createComponent = createComponentFactory({
    component: ClientsPage,
    imports: [IonicModule.forRoot()],
  });
  let spectator: Spectator<ClientsPage>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
