import { Injectable } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { MenuBar } from 'src/app/shared/enums/menus.enum';
import { Platforms } from 'src/app/shared/enums/platforms.enum';
import { DeviceDetails } from 'src/app/shared/models/device-info/device-info.model';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  // tslint:disable-next-line: no-any
  public loading: any;
  // tslint:disable-next-line: no-any
  public actionSheet: any;

  constructor(public menu: MenuController, public platform: Platform) {}

  public disableMenu(): void {
    this.menu.enable(false, MenuBar.LeftMenu);
    this.menu.enable(false, MenuBar.RightMenu);
  }

  public enableMenu(): void {
    this.menu.enable(true, MenuBar.LeftMenu);
    this.menu.enable(true, MenuBar.RightMenu);
  }

  public async isLeftMenuOpen(): Promise<boolean> {
    return this.menu.isOpen(MenuBar.LeftMenu);
  }

  public async isRightMenuOpen(): Promise<boolean> {
    return this.menu.isOpen(MenuBar.RightMenu);
  }

  public closeMenu(): void {
    this.menu.close(MenuBar.LeftMenu);
    this.menu.close(MenuBar.RightMenu);
  }

  public getPlatform(): string {
    if (this.platform.is(Platforms.Android)) {
      return Platforms.Android;
    } else if (this.platform.is(Platforms.Ios)) {
      return Platforms.Ios;
    } else if (this.platform.is(Platforms.Desktop)) {
      return Platforms.Desktop;
    } else {
      this.viewConsoleLog(Platforms.OtherPlatform);
    }
  }

  public deviceDetails(): DeviceDetails {
    const details: DeviceDetails = {
      height: screen.height,
      width: screen.width,
    };
    return details;
  }

  private viewConsoleLog(message, option?): void {
    // console.trace(message);
    if (option) {
      // console.log(message + ':', option);
    } else {
      // console.log(message);
    }
  }
}
