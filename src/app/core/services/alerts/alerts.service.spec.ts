import { AlertsService } from './alerts.service';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

describe('AlertsService', () => {
  let spectator: SpectatorService<AlertsService>;
  const createService = createServiceFactory(AlertsService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
