import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product, products} from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  /**No ngOnInit mthod, nós vamos extrair o productId do route e puxar o Produto correpondente */
  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    // route.snapshot -> used to access route parameters.
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
    /** products.find(function findProduct(productOfProducts) => {product.id === productIdFromRoute}) */


  } // Preciso declara o atributo do onInit aqui pra conseguir implementa-lo

  constructor(private route: ActivatedRoute) {}
}
