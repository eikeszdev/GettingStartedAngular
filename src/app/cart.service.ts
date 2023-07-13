import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient // injetando o módulo httpClient dentro do meu módulo
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // usaremos o metodo geT() do httpModule para receber os dados do nosso shipping.json, que simula dados vindos de uma API
  // -> <> -> defino os atributos e seus tipos, para ser compatível com o que é necessário para suprir o objeto/Interface
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json')
  }
}
