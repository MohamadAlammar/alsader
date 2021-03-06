import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonBottomDrawerModule } from './../modules/ion-bottom-drawer/ion-bottom-drawer.module';

import { HomePage } from './home.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonBottomDrawerModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        TranslateModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
