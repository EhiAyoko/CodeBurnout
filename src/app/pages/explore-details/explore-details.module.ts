import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreDetailsPageRoutingModule } from './explore-details-routing.module';

import { ExploreDetailsPage } from './explore-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreDetailsPageRoutingModule
  ],
  declarations: [ExploreDetailsPage]
})
export class ExploreDetailsPageModule {}
