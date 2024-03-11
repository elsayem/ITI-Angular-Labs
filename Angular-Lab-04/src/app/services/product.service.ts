import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductList } from '../models/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[];
  constructor() {
    this.products = ProductList;
    this.counter=this.products.length;
  }

  getAll(): IProduct[] | undefined {
    return this.products;
  }

  getById(id: number): IProduct | undefined {
    return this.products?.find((p) => p.id == id);
  }

  counter: number = 9;
  add(item: IProduct):void {
    var product = { ...item };
    product.id = ++this.counter;

    this.products?.push(product);
  }
  delete(id:number):void{
    
    this.products=this.products?.filter(p=>p.id!=id);
  }
  edit(item:IProduct):void{
    let targetItem:IProduct|undefined=this.products?.find((p) => p.id == item.id);
    if(targetItem!=undefined){
      let targetItemIndex=this.products?.indexOf(targetItem);
      this.products[targetItemIndex]={ ...item };
     
    }
  }
}
