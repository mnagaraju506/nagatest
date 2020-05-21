import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { StorageKeys } from '../../enums';

@Component({
  selector: 'app-flyout-menu',
  templateUrl: './flyout-menu.component.html',
  styleUrls: ['./flyout-menu.component.scss'],
})
export class FlyoutMenuComponent {
  public appData = AppMetadata;

  public leftMenuItems = [
    {
      name: 'Clients',
      isExpand: true,
      items: [
        {
          title: 'View My Clients',
          url: '/clients',
        },
        {
          title: ' My Jobs',
          url: '/dashboard',
        },
        {
          title: 'Messages',
          url: '/dashboard',
        },
      ],
    },
    {
      name: 'Find Jobs And Requests',
      isExpand: true,
      items: [
        {
          title: 'View Requests',
          url: '/dashboard',
        },
      ],
    },
    {
      name: 'Quotes',
      isExpand: true,
      items: [
        {
          title: 'View Quotes',
          url: '/dashboard',
        },
      ],
    },
    {
      name: 'Invoices',
      isExpand: true,
      items: [
        {
          title: 'View Invoices',
          url: '/dashboard',
        },
      ],
    },
  ];

  public rightMenuItems = [
    {
      name: 'Manage',
      isExpand: true,
      items: [
        {
          title: ' My Profile',
          url: '/my-profile',
        },
        {
          title: ' Photos & Videos',
          url: '/dashboard',
        },
        {
          title: 'Work Hours',
          url: '/dashboard',
        },
        {
          title: 'Services',
          url: '/dashboard',
        },
        {
          title: 'Pro Summary',
          url: '/dashboard',
        },
      ],
    },
    {
      name: 'Marketing',
      isExpand: true,
      items: [
        {
          title: 'E-Flyer',
          url: '/dashboard',
        },
      ],
    },
    {
      name: 'Payment Processing',
      isExpand: true,
      items: [
        {
          title: 'ACH Info',
          url: '/dashboard',
        },
        {
          title: 'Credit Card Info',
          url: '/dashboard',
        },
        {
          title: 'LogOut',
        },
        {
          title: 'Terms & Conditions',
          url: '/terms-and-conditions',
        },
      ],
    },
  ];

  public menus = [
    {
      id: 'leftMenu',
      side: 'start',
      groups: this.leftMenuItems,
    },
    {
      id: 'rightMenu',
      side: 'end',
      groups: this.rightMenuItems,
    },
  ];

  constructor(
    private alertService: AlertsService,
    private nav: NavController,
    private storageService: StorageService
  ) {}

  public logout(): void {
    const buttons = [
      {
        text: 'No',
        role: 'cancel',
      },
      {
        text: 'Yes',
        handler: async () => {
          let userCredentials: {};
          if (await this.storageService.isExists(StorageKeys.UserCredentials)) {
            userCredentials = await this.storageService.getItem(StorageKeys.UserCredentials);
          }
          this.storageService.clear();
          this.storageService.setItem(StorageKeys.UserCredentials, userCredentials); // ignoring user credentials to clear all keys
          this.nav.navigateRoot('landing-screen');
        },
      },
    ];
    this.alertService.presentAlert(this.appData.logoutMessage, buttons);
  }

  public toggleAccordion(itemHeader): void {
    itemHeader.isExpand = !itemHeader.isExpand;
  }
}
