import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
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
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
