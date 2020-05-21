import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { ForgotPasswordService } from './forgot-password.service';

describe('ForgotPasswordService', () => {
  let spectator: SpectatorService<ForgotPasswordService>;
  const createService = createServiceFactory(ForgotPasswordService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
