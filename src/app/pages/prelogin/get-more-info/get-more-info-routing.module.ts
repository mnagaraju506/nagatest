import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetmoreinfoPage } from './get-more-info.page';

const routes: Routes = [
  {
    path: '',
    component: GetmoreinfoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetmoreinfoPageRoutingModule {}
