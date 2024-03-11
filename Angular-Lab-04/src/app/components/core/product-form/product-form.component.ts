import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  constructor(
    private prodService: ProductService,
    private myRouter: Router,
    private actRoute: ActivatedRoute
  ) {}
  myForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [
      
      Validators.required,
      Validators.minLength(5)
    ]),
    img: new FormControl('', [
      
      Validators.required,
      Validators.minLength(10)
    ]),
    description: new FormControl('', [
      
      Validators.required,
      Validators.minLength(4)
    ]),
    price: new FormControl(null, [
      
      Validators.required,
      Validators.min(100)
    ]),
    onSale: new FormControl(true),
    discount: new FormControl(null, [
      
      Validators.required,
      Validators.min(0.05),
      Validators.max(0.25)
    ]),
    quantity: new FormControl(null, [
      
      Validators.required,
      Validators.min(5)
    ]),
  });

  get nameControl() {
    return this.myForm.get('name');
  }
  get imgControl() {
    return this.myForm.get('img');
  }
  get priceControl() {
    return this.myForm.get('price');
  }
  get descriptionControl() {
    return this.myForm.get('description');
  }
  get quantityControl() {
    return this.myForm.get('quantity');
  }
  get discountControl() {
    return this.myForm.get('discount');
  }
  id: number|undefined = 0;
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    
    if (this.id != undefined) {
      var product: IProduct = this.prodService.getById(this.id) as IProduct;
      this.myForm.controls['id'].setValue(product.id);
      this.myForm.controls['name'].setValue(product.name);
      this.myForm.controls['price'].setValue(product.price);
      this.myForm.controls['description'].setValue(product.description);
      this.myForm.controls['img'].setValue(product.img);
      this.myForm.controls['discount'].setValue(product.discount);
      this.myForm.controls['quantity'].setValue(product.quantity);
      this.myForm.controls['onSale'].setValue(product.onSale);
    }
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.myForm.valid) {
      if(this.id!=undefined){
        this.prodService.edit(this.myForm.value);
      }else{
        console.log(this.myForm.value)
        this.prodService.add(this.myForm.value);
      }
      this.myRouter.navigate(['/products']);
    }
  }
}
