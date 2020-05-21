import { AppMetadata } from '../../../shared/constants/app-metadata.const';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { MenusService } from 'src/app/core/services/menus/menus.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.page.html',
  styleUrls: ['./landing-screen.page.scss'],
})
export class LandingscreenPage implements OnInit {
  public data: string;
  public appData = AppMetadata;

  // tslint:disable-next-line: no-any
  public backButtonSubscription: any;
  constructor(private menuService: MenusService, private platform: Platform, private alertService: AlertsService) {}
  public ngOnInit(): void {
    this.menuService.disableMenu();
  }

  public ionViewWillEnter(): void {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      const buttons = [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            // tslint:disable-next-line: no-string-literal
            navigator['app'].exitApp();
          },
        },
      ];
      this.alertService.presentAlert(this.appData.exitAppMessage, buttons, 'Exit');
    });
  }
  public ionViewWillLeave(): void {
    this.backButtonSubscription.unsubscribe();
  }
}
