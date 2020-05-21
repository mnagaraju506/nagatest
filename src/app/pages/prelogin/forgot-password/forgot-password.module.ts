import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotpasswordPage } from './forgot-password.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, ForgotpasswordPageRoutingModule],
  declarations: [ForgotpasswordPage],
})
export class ForgotpasswordPageModule {}
