import { Platforms } from 'src/app/shared/enums/platforms.enum';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { MessageType } from 'src/app/shared/enums/alerts.enum';
import { DeviceDetails } from 'src/app/shared/models/device-info/device-info.model';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  // tslint:disable-next-line: no-any
  public loading: any;
  // tslint:disable-next-line: no-any
  public actionSheet: any;

  constructor(
    public toastController: ToastController,
    public platform: Platform,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController
  ) {}

  public async presentToast(message: string, toastType: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      animated: true,
      color: this.getColorType(toastType),
      keyboardClose: true,
      mode: this.getPlatformForToast(),
    });
    toast.present();
    const dismiss = await toast.onDidDismiss().then((callback) => {
      this.viewConsoleLog(callback);
    });
  }

  public getColorType(type): string {
    let color: string;
    switch (type) {
      case MessageType.Success:
        color = MessageType.Success;
        break;
      case MessageType.Error:
        color = MessageType.Danger;
        break;
      case MessageType.Warning:
        color = MessageType.Warning;
        break;
      case MessageType.Secondary:
        color = MessageType.Secondary;
        break;
      default:
        color = MessageType.Dark;
        break;
    }
    return color;
  }

  public deviceDetails(): DeviceDetails {
    const details: DeviceDetails = {
      height: screen.height,
      width: screen.width,
    };
    return details;
  }

  public async presentAlert(message, buttons, header = ''): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons,
    });
    await alert.present();
  }

  // tslint:disable-next-line: no-any
  public async presentLoading(): Promise<any> {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: '',
      translucent: true,
      animated: true,
    });
    this.loading.onDidDismiss().then(() => {
      this.viewConsoleLog('loaded dismissed');
    });
    return await this.loading.present();
  }

  public async presentActionSheet(message): Promise<void> {
    this.actionSheet = await this.actionSheetController.create({
      header: message.header,
      buttons: message.buttons,
    });
    await this.actionSheet.present();
  }

  private getPlatformForToast(): Platforms.Ios | Platforms.AndriodMd {
    return this.platform.is(Platforms.Ios) ? Platforms.Ios : Platforms.AndriodMd;
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
