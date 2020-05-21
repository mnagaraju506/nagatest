import { AuthenticationService } from './authentication.service';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

describe('AuthenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;
  const createService = createServiceFactory(AuthenticationService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
