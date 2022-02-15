import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa5Page } from './khotabalsayed-ad3eya-ekraa5.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa5PageRoutingModule {}
