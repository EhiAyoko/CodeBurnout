import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveDetailsPageRoutingModule } from './save-details-routing.module';

import { SaveDetailsPage } from './save-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveDetailsPageRoutingModule
  ],
  declarations: [SaveDetailsPage]
})
export class SaveDetailsPageModule {}
