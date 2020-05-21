import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(private androidPermissions: AndroidPermissions) {}

  public async hasPermission(permissionType: string): Promise<boolean> {
    const result = await this.androidPermissions.checkPermission(permissionType);
    return result.hasPermission;
  }

  public async grantPermission(permissionType: string): Promise<boolean> {
    await this.androidPermissions
      .requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then((status) => {
        return status.hasPermission;
      });
    return false;
  }

  public async checkAndGrantPermission(permissionType: string): Promise<boolean> {
    const result = await this.androidPermissions.checkPermission(permissionType);
    if (!result.hasPermission) {
      return this.grantPermission(permissionType);
    }
    return result.hasPermission;
  }
}
