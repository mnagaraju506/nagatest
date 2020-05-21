import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpasswordPage } from './forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpasswordPageRoutingModule {}
