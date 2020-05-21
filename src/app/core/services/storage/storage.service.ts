import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platforms } from 'src/app/shared/enums';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private nativeStorage: NativeStorage, private platform: Platform) {}

  public setItem(key: string, item: any): Promise<any> {
    if (this.platform.is(Platforms.Desktop) || this.platform.is(Platforms.MobileWeb)) {
      localStorage.setItem(key, JSON.stringify(item));
    } else {
      return this.nativeStorage.setItem(key, item);
    }
  }

  public async getItem(key: string): Promise<any> {
    if (this.platform.is(Platforms.Desktop) || this.platform.is(Platforms.MobileWeb)) {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    } else {
      return await this.nativeStorage.getItem(key);
    }
  }
  public async isExists(key: string): Promise<boolean> {
    if (this.platform.is(Platforms.Desktop) || this.platform.is(Platforms.MobileWeb)) {
      const item = localStorage.getItem(key);
      return item !== undefined && item !== null;
    } else {
      const keys: [] = await this.nativeStorage.keys();
      return keys.filter((x) => x === key).length > 0;
    }
  }
  public removeItem(key: string): void {
    if (this.platform.is(Platforms.Desktop) || this.platform.is(Platforms.MobileWeb)) {
      localStorage.removeItem(key);
    } else {
      this.nativeStorage.remove(key);
    }
  }
  public clear(): void {
    if (this.platform.is(Platforms.Desktop) || this.platform.is(Platforms.MobileWeb)) {
      localStorage.clear();
    } else {
      this.nativeStorage.clear();
    }
  }
}
