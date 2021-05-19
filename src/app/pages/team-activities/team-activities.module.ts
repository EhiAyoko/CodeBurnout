import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamActivitiesPageRoutingModule } from './team-activities-routing.module';

import { TeamActivitiesPage } from './team-activities.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    TeamActivitiesPageRoutingModule
  ],
  declarations: [TeamActivitiesPage]
})
export class TeamActivitiesPageModule {}
