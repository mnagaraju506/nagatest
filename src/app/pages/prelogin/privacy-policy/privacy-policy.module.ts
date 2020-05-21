import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrivacyPolicyPageRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyPage } from './privacy-policy.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PrivacyPolicyPageRoutingModule, PdfViewerModule],
  declarations: [PrivacyPolicyPage],
})
export class PrivacyPolicyPageModule {}
