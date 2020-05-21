import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingscreenPageRoutingModule } from './landing-screen-routing.module';

import { LandingscreenPage } from './landing-screen.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingscreenPageRoutingModule],
  declarations: [LandingscreenPage],
})
export class LandingscreenPageModule {}
