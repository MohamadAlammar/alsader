import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeAwal1417Page } from './alusul-jamade-awal1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeAwal1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeAwal1417PageRoutingModule {}
