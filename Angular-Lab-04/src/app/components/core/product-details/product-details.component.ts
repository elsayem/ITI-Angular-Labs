import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined = {
    id: 3,
    name: 'test',
    description: 'test',
    discount: 3,
    price: 122,
    onSale: false,
    quantity: 0,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };
  newPrice:number=0;
  id: number = 3;
  constructor(
    private activeRoute: ActivatedRoute,
    private proService: ProductService,
    private myRouter: Router
  ) {}
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    
    this.product = this.proService.getById(this.id);
    if (this.product != undefined) {
      this.newPrice=this.product.price*(1-this.product.discount);
    }
  }
}
