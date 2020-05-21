import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TermsAndConditionsPageRoutingModule } from './terms-and-conditions-routing.module';
import { TermsAndConditionsPage } from './terms-and-conditions.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TermsAndConditionsPageRoutingModule, PdfViewerModule],
  declarations: [TermsAndConditionsPage],
})
export class TermsAndConditionsPageModule {}
