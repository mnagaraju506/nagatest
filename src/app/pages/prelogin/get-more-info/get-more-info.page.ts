import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { configuration } from 'src/assets/config/config';
import { Category } from 'src/app/shared/models/all-static-content/all-static-content.model';
import { DownloadsService } from 'src/app/core/services/downloads/downloads.service';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { Roles } from 'src/app/shared/enums/roles.enum';

@Component({
  selector: 'app-get-more-info',
  templateUrl: './get-more-info.page.html',
  styleUrls: ['./get-more-info.page.scss'],
})
export class GetmoreinfoPage implements OnInit {
  public appData = AppMetadata;
  public getMoreInfoVideoUrl: string = configuration.cdnBaseUrl + configuration.getMoreInfoUrl;
  public allStaticDataForProfessional: Category;
  public videoImageUrl: string;

  constructor(private commonService: MenusService, private downloadService: DownloadsService) {}

  public ngOnInit(): void {
    this.commonService.disableMenu();
    this.getStaticContentForProfessional();
  }
  private getStaticContentForProfessional(): void {
    this.downloadService.readJsonFile(configuration.allStaticContentUrl).subscribe((data) => {
      this.allStaticDataForProfessional = data.howItWorks.categories.find((x) => x.roleType === Roles.Vendor);
      this.videoImageUrl = configuration.cdnBaseUrl + '' + this.allStaticDataForProfessional?.videoImage;
    });
  }
}
