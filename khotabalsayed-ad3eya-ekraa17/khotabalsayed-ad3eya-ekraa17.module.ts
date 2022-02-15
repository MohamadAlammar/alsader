import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa17PageRoutingModule } from './khotabalsayed-ad3eya-ekraa17-routing.module';

import { KhotabalsayedAd3eyaEkraa17Page } from './khotabalsayed-ad3eya-ekraa17.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa17PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa17Page]
})
export class KhotabalsayedAd3eyaEkraa17PageModule {}
