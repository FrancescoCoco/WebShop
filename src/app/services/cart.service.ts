import { Injectable } from '@angular/core';
import { _MatListItemGraphicBase } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //This behavior Subject is used to receive new value 
  cart = new BehaviorSubject<Cart>({items: []});

            //Inform the user of the success of add new items to the cart 
  constructor(private _snackBar: MatSnackBar) { 

  }

  addToCart(item: CartItem): void{
      const items = [...this.cart.value.items];

      const itemInCart= items.find((_item)=> _item.id === item.id);

      //If the value is already in the cart we add the quantity up 
      if(itemInCart){
         itemInCart.quantity += 1;

      }

      else{
        items.push(item);
      }

      this.cart.next({ items});
      this._snackBar.open('1 item added to cart', 'Ok', {duration: 3000});
  }

  getTotal(items: Array<CartItem>): number {
    return items.map((item)=> item.price * item.quantity).reduce((prev, current)=> prev + current , 0);
  }

  onClearCart(): void {
    this.cart.next({items:[] });
    this._snackBar.open('Cart is clear', 'Ok', {duration: 3000});
  }

   //To remove quantity
   removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    let  filteredItems = this.cart.value.items.map((_item)=>{
      if(_item.id === item.id){
        _item.quantity--;
        if(_item.quantity === 0){
            itemForRemoval = _item;
        }
      }
    return _item ;
    });

    if(itemForRemoval){
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }
    this.cart.next({items: filteredItems});
    this._snackBar.open('1 item Removed from cart ', 'Ok', {duration: 3000});
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {

    const filteredItem = this.cart.value.items.filter((_item)=> _item.id !== item.id );
    
    //To avoid two notification 
    if(update){
    this.cart.next({items: filteredItem});
    this._snackBar.open('1 item Removed from cart ', 'Ok', {duration: 3000});
    }
    return filteredItem;
  }

 
}

