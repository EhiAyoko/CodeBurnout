import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveDetailsPage } from './save-details.page';

const routes: Routes = [
  {
    path: '',
    component: SaveDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveDetailsPageRoutingModule {}
