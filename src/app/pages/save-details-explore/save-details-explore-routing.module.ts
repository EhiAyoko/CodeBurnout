import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveDetailsExplorePage } from './save-details-explore.page';

const routes: Routes = [
  {
    path: '',
    component: SaveDetailsExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveDetailsExplorePageRoutingModule {}
