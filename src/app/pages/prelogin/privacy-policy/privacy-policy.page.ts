import { NavController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { DownloadsService } from 'src/app/core/services/downloads/downloads.service';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { configuration } from 'src/assets/config/config';
import { PermissionService } from 'src/app/core/services/downloads/permission.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  public pdfSrc = configuration.privacyPolicyDocumentUrl;
  public page = 1;
  public totalPages: number;
  public isLoaded = false;
  public appData = AppMetadata;

  public fileTransferObject: FileTransferObject = this.fileTransfer.create();

  private targetPathToSave = this.file.externalRootDirectory + 'Download/' + 'Beekee_Privacy_Policy.pdf';

  constructor(
    private navCtrl: NavController,
    // tslint:disable-next-line: deprecation
    private fileTransfer: FileTransfer,
    private file: File,
    private androidPermissions: AndroidPermissions,
    private permissionService: PermissionService,
    private downloadsService: DownloadsService,
    private alertService: AlertsService,
    private menuService: MenusService
  ) {}

  public ngOnInit(): void {
    this.menuService.disableMenu();
  }

  // tslint:disable-next-line: no-any
  public afterLoadComplete(pdfData: any): void {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  public nextPage(): void {
    this.page++;
  }

  public prevPage(): void {
    this.page--;
  }

  public navigateBack(): void {
    this.navCtrl.back();
  }

  public saveDocument(): void {
    this.permissionService
      .checkAndGrantPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then((hasPermission) => {
        if (hasPermission) {
          this.downloadPDFFile();
        }
      });
  }

  public downloadPDFFile(): void {
    const buttons = [
      {
        text: 'OK',
      },
    ];
    this.downloadsService.downloadPDFFile(this.pdfSrc, this.targetPathToSave);
    this.alertService.presentAlert(this.appData.successDownloadMessage + '\n' + this.targetPathToSave, buttons);
  }

  public navigateToDashboard(): void {
    this.navCtrl.navigateRoot('landing-screen');
  }
}
