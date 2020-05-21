import { DownloadsService } from './downloads.service';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

describe('MenusService', () => {
  let spectator: SpectatorService<DownloadsService>;
  const createService = createServiceFactory(DownloadsService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
