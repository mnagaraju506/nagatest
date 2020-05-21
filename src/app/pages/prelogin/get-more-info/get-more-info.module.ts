import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetmoreinfoPageRoutingModule } from './get-more-info-routing.module';

import { GetmoreinfoPage } from './get-more-info.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GetmoreinfoPageRoutingModule],
  declarations: [GetmoreinfoPage],
})
export class GetmoreinfoPageModule {}
