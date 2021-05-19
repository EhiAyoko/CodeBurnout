import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreActivitiesPageRoutingModule } from './explore-activities-routing.module';

import { ExploreActivitiesPage } from './explore-activities.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ExploreActivitiesPageRoutingModule
  ],
  declarations: [ExploreActivitiesPage]
})
export class ExploreActivitiesPageModule {}
