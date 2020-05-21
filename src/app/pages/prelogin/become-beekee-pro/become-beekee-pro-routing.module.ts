import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomeBeekeeProPage } from './become-beekee-pro.page';

const routes: Routes = [
  {
    path: '',
    component: BecomeBeekeeProPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeBeekeeProPageRoutingModule {}
