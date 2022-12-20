import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';
import { CartComponent } from 'src/app/Pages/cart/cart.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html"
})
export class HeaderComponent{
  //Private field 
  private _cart : Cart = {items: []};
  items_quantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart){
    this._cart = cart;
    this.items_quantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

  

  constructor(private cartService: CartService){

  }

  getTotal(items: Array<CartItem> ): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.onClearCart();
  }

  
}
