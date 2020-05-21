import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { ResetPasswordService } from './reset-password.service';

describe('ResetPasswordService', () => {
  let spectator: SpectatorService<ResetPasswordService>;
  const createService = createServiceFactory(ResetPasswordService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
