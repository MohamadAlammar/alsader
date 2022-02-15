import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulZelka3da1417Page } from './alusul-zelka3da1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulZelka3da1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulZelka3da1417PageRoutingModule {}
