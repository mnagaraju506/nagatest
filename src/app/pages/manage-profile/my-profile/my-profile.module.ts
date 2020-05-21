import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { MyProfilePage } from './my-profile.page';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyProfilePageRoutingModule,
    RxReactiveFormsModule,
  ],
  declarations: [MyProfilePage],
})
export class MyProfilePageModule {}
