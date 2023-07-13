import { RouterModule, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './UNUSEDapp-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.components';
import { ProductListComponent } from './product-list/product-list.components';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent}
    ]),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    RouterLink,
    HttpClientModule
  ],
  declarations: [ // Aqui preciso declarar todas minhas classes exportadas, ou seja, meus components que são fruto dessa classe.
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
