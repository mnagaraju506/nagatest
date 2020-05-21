import { PermissionService } from './permission.service';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

describe('MenusService', () => {
  let spectator: SpectatorService<PermissionService>;
  const createService = createServiceFactory(PermissionService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
