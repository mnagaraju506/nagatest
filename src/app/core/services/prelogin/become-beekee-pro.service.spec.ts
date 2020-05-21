import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { BecomeBeekeeProService } from './become-beekee-pro.service';

describe('BecomeBeekeeProService', () => {
  let spectator: SpectatorService<BecomeBeekeeProService>;
  const createService = createServiceFactory(BecomeBeekeeProService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
