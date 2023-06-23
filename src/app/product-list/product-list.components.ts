import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products]; // propriedade da minha classe, que extrai do meu array em "products.ts"

  /** Próximo passo é criamos um alerta que usa nosso PoductListComponent para criar uma notificação de alerta
   * ao produto bater determinado preço
   * - Vamos gerar o component de product Alert via comando: ng generate component product-alerts
   */

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/