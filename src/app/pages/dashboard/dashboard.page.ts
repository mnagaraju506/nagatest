import { AppMetadata } from './../../shared/constants/app-metadata.const';
import { OnInit, Component } from '@angular/core';
import { Animation, AnimationController, Platform } from '@ionic/angular';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // tslint:disable-next-line: no-any
  public appData = AppMetadata;
  // tslint:disable-next-line: no-any
  private backButtonSubscription: any;
  constructor(private alertService: AlertsService, private platform: Platform, private commonService: MenusService) {
    this.appData = AppMetadata;
  }
  public ngOnInit(): void {
    this.commonService.enableMenu();
  }

  public ionViewWillEnter(): void {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
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
      if ((await this.commonService.isLeftMenuOpen()) || (await this.commonService.isRightMenuOpen())) {
        this.commonService.closeMenu();
      } else {
        this.alertService.presentAlert(this.appData.exitAppMessage, buttons, 'Exit');
      }
    });
  }
  public ionViewWillLeave(): void {
    this.backButtonSubscription.unsubscribe();
  }
}
