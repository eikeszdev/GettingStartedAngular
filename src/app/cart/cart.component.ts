import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.CartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  onSubmit(): void { // onSubmit do form
    // Process checkout data here
    this.items = this.CartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
