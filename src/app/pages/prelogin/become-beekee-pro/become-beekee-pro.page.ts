import { BecomeBeekeeProService } from './../../../core/services/prelogin/become-beekee-pro.service';
import { PatternValidator } from './../../../shared/validators/pattern-validator';
import { ContactUsRequest } from './../../../shared/models/pre-login/contact-us-request.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MessageType } from 'src/app/shared/enums/alerts.enum';
import { Roles } from 'src/app/shared/enums/roles.enum';

@Component({
  selector: 'app-become-beekee-pro',
  templateUrl: './become-beekee-pro.page.html',
  styleUrls: ['./become-beekee-pro.page.scss'],
})
export class BecomeBeekeeProPage implements OnInit {
  public appData = AppMetadata;
  public frmBecomeBKPro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertsService,
    private activeRoute: ActivatedRoute,
    private nav: NavController,
    private becomeBeeKeeProService: BecomeBeekeeProService,
    private menuService: MenusService
  ) {
    this.createForm();
  }

  public get formControls(): FormGroup {
    return this.frmBecomeBKPro as FormGroup;
  }

  public ngOnInit(): void {
    this.menuService.disableMenu();
  }

  public onBecomeBKPro(): void {
    const contactUsRequest = new ContactUsRequest();
    contactUsRequest.firstname = this.formControls.controls.firstName.value;
    contactUsRequest.lastname = this.formControls.controls.lastName.value;
    contactUsRequest.fromEmail = this.formControls.controls.email.value;
    contactUsRequest.phone = this.formControls.controls.phone.value;
    contactUsRequest.forRole = Roles.Professional;

    this.becomeBeeKeeProService.saveContactUs(contactUsRequest).subscribe(
      (resp) => {
        if (resp) {
          const buttons = [
            {
              text: 'OK',
              handler: () => {
                this.nav.navigateBack(['/landing-screen']);
              },
            },
          ];
          this.alertService.presentAlert(this.appData.successcontactUs, buttons);
        } else {
          this.alertService.presentToast(this.appData.errorMessage, MessageType.Error);
        }
      },
      (err) => {
        this.alertService.presentToast(this.appData.errorMessage, MessageType.Error);
      }
    );
  }

  private createForm(): void {
    this.frmBecomeBKPro = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, PatternValidator.validEmail])],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
}
