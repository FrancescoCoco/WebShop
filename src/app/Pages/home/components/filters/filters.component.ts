import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.components.html'
})
export class FiltersComponent implements OnInit, OnDestroy{
  
  @Output()showCategory = new EventEmitter<string>();
  
  categoriesSubscription: Subscription | undefined ;

  //Categories of web shop 
  categories: Array<string> | undefined;


  constructor(private store_service: StoreService){
    
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.store_service.getAllCategories()
    .subscribe((_categories) => {
        this.categories = _categories;
    });
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }
  

  //On update category passed it to the parent component
  onShowCategory(category: string ): void {
      this.showCategory.emit(category);
      
  }

}
