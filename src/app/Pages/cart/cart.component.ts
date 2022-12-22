import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { reduce } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

const $URL_PAYMENTS: string = "http://storeweb.info/payments/checkout";

@Component({
  selector: 'app-cart',
  templateUrl:'cart.component.html'
})
export class CartComponent implements OnInit{
  cart: Cart = {items : [{
      product : 'https://via.placeholder.com/150',
      name : 'sneakers',
      price : 150,
      quantity: 1,
      id : 1,
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'sneakers',
      price : 150,
      quantity: 3,
      id : 2,
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'sneakers',
      price : 150,
      quantity: 1,
      id : 3,
    }]};

    dataSource: Array<CartItem> = [];
    displayedColumns : Array<string> =[
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
    ];
    


  constructor(private cartService: CartService, private http: HttpClient){

  }
  
  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart)=>{
      this.cart = _cart;
      this.dataSource = this.cart.items;
    }
    );
  }

  getTotal(items: Array<CartItem> ): number {
      return this.cartService.getTotal(items);
  }

  onClearCart():void {
    this.cartService.onClearCart();
  }

  onRemoveFromCart(item: CartItem):void{
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckOut(): void {
    this.http.post($URL_PAYMENTS,
    {
      items: this.cart.items 
    })
    .subscribe(async(res:any)=>{
      //Method to load the stripe
      let stripe = await loadStripe('pk_test_51MGmK7FbmxhaXe5khlmOhmttJbTefktK7EiVEJYXemXEqNAwNUMZkMHnVvUEXQyV8BGmWNF7RpRd5GCToBx2AxBo00TmnJsJTD');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  } 
}
