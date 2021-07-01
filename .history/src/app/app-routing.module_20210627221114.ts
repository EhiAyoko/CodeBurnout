import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'explore-activities',
    loadChildren: () => import('./pages/explore-activities/explore-activities.module').then( m => m.ExploreActivitiesPageModule)
  },
  {
    path: 'team-activities',
    loadChildren: () => import('./pages/team-activities/team-activities.module').then( m => m.TeamActivitiesPageModule)
  },
  {
    path: 'saved-activities',
    loadChildren: () => import('./pages/saved-activities/saved-activities.module').then( m => m.SavedActivitiesPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'support-circle',
    loadChildren: () => import('./pages/support-circle/support-circle.module').then( m => m.SupportCirclePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'blog-details',
    loadChildren: () => import('./pages/blog-details/blog-details.module').then( m => m.BlogDetailsPageModule)
  },
  {
    path: 'update-person',
    loadChildren: () => import('./pages/update-person/update-person.module').then( m => m.UpdatePersonPageModule)
  },
  {
    path: 'explore-details',
    loadChildren: () => import('./pages/explore-details/explore-details.module').then( m => m.ExploreDetailsPageModule)
  },
  {
    path: 'team-details',
    loadChildren: () => import('./pages/team-details/team-details.module').then( m => m.TeamDetailsPageModule)
  },
  {
    path: 'save-details',
    loadChildren: () => import('./pages/save-details/save-details.module').then( m => m.SaveDetailsPageModule)
  },
  {
    path: 'save-details-explore',
    loadChildren: () => import('./pages/save-details-explore/save-details-explore.module').then( m => m.SaveDetailsExplorePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
