import { MessageType } from './../../shared/enums/alerts.enum';
import { AlertsService } from '../../core/services/alerts/alerts.service';
import { PermissionService } from '../../core/services/downloads/permission.service';
import { DownloadsService } from 'src/app/core/services/downloads/downloads.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { configuration } from './../../../assets/config/config';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { promise } from 'protractor';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {
  public pdfSrc: string = configuration.termsAndConditionsDocumentUrl;
  public page: number;
  public totalPages: number;
  public isLoaded: boolean;
  // tslint:disable-next-line: no-any
  public appData = AppMetadata;
  public fileTransferObject: FileTransferObject = this.fileTransfer.create();
  private targetPathToSave: string = this.file.externalRootDirectory + 'Download/' + 'Beekee_Terms_And_Conditions.pdf';

  constructor(
    private navCtrl: NavController,
    // tslint:disable-next-line: deprecation
    private fileTransfer: FileTransfer,
    private file: File,
    private androidPermissions: AndroidPermissions,
    private permissionService: PermissionService,
    private downloadService: DownloadsService,
    private alertService: AlertsService,
    private menuService: MenusService
  ) {
    this.page = 1;
    this.isLoaded = false;
  }

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
    this.downloadService.downloadPDFFile(this.pdfSrc, this.targetPathToSave);
    this.alertService.presentAlert(this.appData.successDownloadMessage + '\n' + this.targetPathToSave, buttons);
  }

  public navigateToDashboard(): void {
    this.navCtrl.navigateRoot('dashboard');
  }
}
