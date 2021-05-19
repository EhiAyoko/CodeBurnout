import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveDetailsExplorePageRoutingModule } from './save-details-explore-routing.module';

import { SaveDetailsExplorePage } from './save-details-explore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveDetailsExplorePageRoutingModule
  ],
  declarations: [SaveDetailsExplorePage]
})
export class SaveDetailsExplorePageModule {}
