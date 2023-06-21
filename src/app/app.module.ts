import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './UNUSEDapp-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.components';
import { ProductListComponent } from './product-list/product-list.components';

@NgModule({
  declarations: [ // Aqui preciso declarar todas minhas classes exportadas, ou seja, meus components que são fruto dessa classe.
    AppComponent,
    TopBarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
