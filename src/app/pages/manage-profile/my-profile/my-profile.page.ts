import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { PatternValidator } from 'src/app/shared/validators/pattern-validator';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserDetails } from 'src/app/shared/models/user-details/user-details.model';
import { MessageType } from 'src/app/shared/enums';
import { MyProfileService } from './services/my-profile.service';
import { MyProfile } from './models/my-profile.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  public appData = AppMetadata;
  public frmProfilePage: IFormGroup<MyProfile>;
  public userDetails: UserDetails;

  constructor(
    private alertService: AlertsService,
    private activeRoute: ActivatedRoute,
    private nav: NavController,
    private myProfileService: MyProfileService,
    private menuService: MenusService,
    private fb: RxFormBuilder
  ) {
    this.createForm();
    this.getUserDetails();
  }

  public ngOnInit(): void {
    this.menuService.disableMenu();
  }

  public get formControls(): IFormGroup<MyProfile> {
    return this.frmProfilePage as IFormGroup<MyProfile>;
  }

  private createForm(): void {
    this.frmProfilePage = this.fb.formGroup(new MyProfile()) as IFormGroup<MyProfile>;
  }

  // TODO: have to grab the userId from session
  public getUserDetails(): void {
    this.myProfileService.getUserDetailsById('5e456369-3228-4e51-ad79-dc906e1563e8').subscribe((response) => {
      this.userDetails = response;
      this.patchFormValues(this.userDetails);
    });
  }

  public patchFormValues(userDetails: UserDetails): void {
    this.formControls.patchValue({
      businessName: userDetails.vendorDetail.businessName,
      billAddress: userDetails.address.addressLine,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.contact.email,
      phone: userDetails.contact.phone,
      apt: userDetails.address.apt,
      zipCode: userDetails.address.zipCode5,
      city: userDetails.address.city,
      state: userDetails.address.stateProvince,
    });
  }

  public saveProfile(userDetails: UserDetails): void {
    userDetails.vendorDetail.businessName = this.formControls.controls.businessName.value;
    userDetails.address.addressLine = this.formControls.controls.billaddress.value;
    userDetails.firstName = this.formControls.controls.firstName.value;
    userDetails.lastName = this.formControls.controls.lastName.value;
    userDetails.contact.email = this.formControls.controls.email.value;
    userDetails.contact.phone = this.formControls.controls.phone.value;
    userDetails.address.apt = this.formControls.controls.apt.value;
    userDetails.address.zipCode5 = this.formControls.controls.zipCode.value;
    userDetails.address.city = this.formControls.controls.city.value;
    userDetails.address.stateProvince = this.formControls.controls.state.value;

    this.myProfileService.updateUserProfile(this.userDetails).subscribe(
      (response) => {
        if (response) {
          this.alertService.presentToast(this.appData.profileUpdateSuccess, MessageType.Success);
        }
      },
      (error) => {
        this.alertService.presentToast(this.appData.profileUpdateError, MessageType.Error);
      }
    );
  }

  // TODO: have to check the below Functionality after the deployment of concerned API
  public onZipcodeChange(event) {
    let zipcode = +event;
    this.myProfileService.getStateNCityByZipcode(zipcode).subscribe((response) => {
      if (response) {
        this.formControls.controls.city.setValue(response.city);
        this.formControls.controls.state.setValue(response.state);
      }
    });
  }
}
