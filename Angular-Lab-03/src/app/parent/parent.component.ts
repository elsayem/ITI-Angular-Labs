import { Component } from '@angular/core';
import { IProduct } from '../Model/iproduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  products: IProduct[] = [];

  receiveProductFromChild(product: IProduct) {
    this.products.push(product);
  }

  deleteProduct(product: IProduct) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}