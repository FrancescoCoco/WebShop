import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.components.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  sort='desc'
  itemsShowCount= 12

  //@Output to send data outside your component to parent components
  @Output() columnsCountChange = new EventEmitter<number>();

  //@Output to send data outside your component to parent components
  @Output() itemsCountChange = new EventEmitter<number>();

  //@Output to send data outside your component to parent components
  @Output() sortChange = new EventEmitter<string>();


  constructor(){

  }
  
  ngOnInit(): void {
    
  }

  //Update sort type
  onSortUpdated(newSort: string):void{
    this.sort= newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number):void{
      this.itemsShowCount= count;
      this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNum: number):void{
    //Change the output with the number of template clicked 
    this.columnsCountChange.emit(colsNum);
  }
}
