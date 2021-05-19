import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportCirclePage } from './support-circle.page';

const routes: Routes = [
  {
    path: '',
    component: SupportCirclePage
  },
  {
    path: 'add-person',
    loadChildren: () => import('./add-person/add-person.module').then( m => m.AddPersonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportCirclePageRoutingModule {}
