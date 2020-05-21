import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { MyProfileService } from './my-profile.service';

describe('AuthenticationService', () => {
  let spectator: SpectatorService<MyProfileService>;
  const createService = createServiceFactory(MyProfileService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
