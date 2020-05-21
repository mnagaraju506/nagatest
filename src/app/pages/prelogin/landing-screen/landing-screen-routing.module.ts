import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingscreenPage } from './landing-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LandingscreenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingscreenPageRoutingModule {}
