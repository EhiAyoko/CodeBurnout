import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreActivitiesPage } from './explore-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreActivitiesPageRoutingModule {}
