import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { createComponentFactory, Spectator, mockProvider, createRoutingFactory } from '@ngneat/spectator';
import { IonicModule, NavController } from '@ionic/angular';
import { TermsAndConditionsPage } from './terms-and-conditions.page';
import { PermissionService } from 'src/app/core/services/downloads/permission.service';
import { DownloadsService } from 'src/app/core/services/downloads/downloads.service';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { TermsAndConditionsPageModule } from './terms-and-conditions.module';
import { File } from '@ionic-native/file/ngx';
import { fakeAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';

describe('TermsAndConditionsPage', () => {
  let spectator: Spectator<TermsAndConditionsPage>;
  const createComponent = createRoutingFactory({
    component: TermsAndConditionsPage,
    mocks: [PermissionService, DownloadsService, MenusService],
    detectChanges: false,
    imports: [IonicModule.forRoot(), TermsAndConditionsPageModule],
    providers: [
      PermissionService,
      DownloadsService,
      MenusService,
      NavController,
      // tslint:disable-next-line: deprecation
      FileTransfer,
      File,
      AndroidPermissions,
      AlertsService,
      UrlSerializer,
      MenusService,
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    // spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('invoke after load', () => {
    const pdfData = { numPages: 2 };
    spectator.component.afterLoadComplete(pdfData);
  });

  it('invoke next page', () => {
    spectator.component.nextPage();
  });

  it('invoke previuos page', () => {
    spectator.component.prevPage();
  });

  it('invoke back button', () => {
    spectator.component.navigateBack();
  });

  it('invoke saveDocument, get permission to download the document', fakeAsync(() => {
    // tslint:disable-next-line: deprecation
    const permissionService = spectator.get(PermissionService);
    permissionService.checkAndGrantPermission.and.callFake(() =>
      Promise.resolve(() => {
        // tslint:disable-next-line: no-unused-expression
        true;
      })
    );
    spectator.detectChanges();
    spectator.component.saveDocument();
  }));
});
