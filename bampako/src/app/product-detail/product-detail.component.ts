import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product = input<Product>();
  added = output<Product>();
  //product: Product = {id: 12, title:"mouse"};

  addToCart() {
    this.added.emit(this.product()!);
  }
}
