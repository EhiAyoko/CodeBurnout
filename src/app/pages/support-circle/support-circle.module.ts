import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportCirclePageRoutingModule } from './support-circle-routing.module';

import { SupportCirclePage } from './support-circle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportCirclePageRoutingModule
  ],
  declarations: [SupportCirclePage]
})
export class SupportCirclePageModule {}
