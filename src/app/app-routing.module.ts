import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadelCartService } from './padel-cart.service';
import { RegisterComponent } from './register/register.component';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StoreCarritoComponent } from './store-carrito/store-carrito.component';
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
  },
  {
    path: 'carrito',
    component: StoreCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
