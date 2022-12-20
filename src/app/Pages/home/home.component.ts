import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id:number]: number}={1: 400, 3:335, 4: 350};


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})
export class HomeComponent  implements OnInit , OnDestroy{
  //The default number of columns
  cols = 1;
  //The default rowHeight
  rowHeight = ROWS_HEIGHT[this.cols]
  //Category default is undefined 
  category : string | undefined ;

  //product 
  products : Array<Product> | undefined;
  sort = 'desc'
  count ='12'
  //This variable contain the subscription 
  productsSubscription: Subscription | undefined 
  
  constructor(private cartService: CartService, private storeService: StoreService){

  }

  ngOnInit(): void {
     this.getProducts();
  }

  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe();
    }
  }

  //Method to obtain products from subscription 
  getProducts() : void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category)
    .subscribe((_products)=>{
      this.products = _products;
    });
  }


  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onItemsCountChange(newcount: number): void {
    this.count = newcount.toString();
    this.getProducts();
  }

  onSortChange(newsort: string ): void {
    this.sort = newsort;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(product: Product): void{
    this.cartService.addToCart({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        id: product.id
    });
  }

}
