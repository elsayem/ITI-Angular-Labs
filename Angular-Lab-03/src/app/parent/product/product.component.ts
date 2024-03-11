import { IProduct } from './../../Model/iproduct';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  proRegForm: FormGroup;
  @Output() submitForm: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private fb: FormBuilder) {
    this.proRegForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, Validators.min(100)]],
      quantity: ['', [Validators.required, Validators.min(5)]],
      discount: [
        '',
        [Validators.required, Validators.min(5), Validators.max(25)],
      ],
      isInSale: ['false'],
    });
  }

  resetForm(): void {
    if (confirm('Are you sure you want to reset the form?')) {
      this.proRegForm.reset();
    }
  }

  onSubmit(): void {
    let price: number = parseInt(this.proRegForm.value.price);
    let quantity: number = parseInt(this.proRegForm.value.quantity);
    let discount: number = parseInt(this.proRegForm.value.discount);
    const product: IProduct = {
      name: this.proRegForm.value.name,
      category: this.proRegForm.value.category,
      price: price,
      quantity: quantity,
      discount: discount,
      isInSale: this.proRegForm.value.isInSale,
    };
    if (this.proRegForm.valid) {
      this.submitForm.emit(product);
    } else {
      this.markFormGroupTouched(this.proRegForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
