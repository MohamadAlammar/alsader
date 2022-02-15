import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa23Page } from './khotabalsayed-ad3eya-ekraa23.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa23PageRoutingModule {}
