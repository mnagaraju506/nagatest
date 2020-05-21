import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FlyoutMenuComponent } from './flyout-menu/flyout-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [FlyoutMenuComponent],
  imports: [CommonModule, IonicModule, AppRoutingModule],
  exports: [FlyoutMenuComponent],
})
export class ComponentsModule {}
