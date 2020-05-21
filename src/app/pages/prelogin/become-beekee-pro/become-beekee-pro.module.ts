import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BecomeBeekeeProPageRoutingModule } from './become-beekee-pro-routing.module';
import { BecomeBeekeeProPage } from './become-beekee-pro.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, BecomeBeekeeProPageRoutingModule],
  declarations: [BecomeBeekeeProPage],
})
export class BecomeBeekeeProPageModule {}
