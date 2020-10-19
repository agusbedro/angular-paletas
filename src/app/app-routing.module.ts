import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StorePaletasComponent } from './store-paletas/store-paletas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paletas',
    pathMatch: 'full'
  },
  {
    path: 'paletas',
    component: StorePaletasComponent
  },
  {
    path: 'about',
    component: StoreAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
