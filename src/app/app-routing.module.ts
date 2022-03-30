import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path : '',
  redirectTo : 'firstpage',
  pathMatch : 'full'
  },
  {
  path : 'firstpage',
  loadChildren : () => import('./Modules/firstpage/firstpage.module').then(m=>m.FirstpageModule)
  },
  {
    path : 'login',
    loadChildren : () => import('./Modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path : 'netflix',
    loadChildren : () => import('./Modules/netflix/netflix.module').then(m=>m.NetflixModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
