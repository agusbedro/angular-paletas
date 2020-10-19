import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaletasListComponent } from './paletas-list/paletas-list.component';

import { FormsModule } from '@angular/forms';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StorePaletasComponent } from './store-paletas/store-paletas.component';
import { StoreCarritoComponent } from './store-carrito/store-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletasListComponent,
    StoreAboutComponent,
    StorePaletasComponent,
    StoreCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
