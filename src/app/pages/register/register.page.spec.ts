import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  const createComponent = createComponentFactory({
    component: RegisterPage,
    imports: [IonicModule.forRoot()],
  });
  let spectator: Spectator<RegisterPage>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
