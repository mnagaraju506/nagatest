import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator';
import { IonicModule } from '@ionic/angular';

import { GetmoreinfoPage } from './get-more-info.page';

describe('GetmoreinfoPage', () => {
  const createComponent = createComponentFactory({
    component: GetmoreinfoPage,
    imports: [IonicModule.forRoot()],
  });
  let spectator: Spectator<GetmoreinfoPage>;

  beforeEach(() => {
    spectator = createComponent();
  });

  describe('when initializing', () => {
    it('should create', () => {
      expect(spectator).toBeTruthy();
    });
  });
});
