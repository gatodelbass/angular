import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  selectedProduct: Product | undefined;

  author: string = 'elgato';

  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 300000,
      categories: {
        1: 'Computing',
        2: 'Peripherals',
      },
    },
    {
      id: 2,
      title: 'Microphone',
      price: 500000,
      categories: {
        3: 'Audio',
      },
    },
    {
      id: 3,
      title: 'Web camera',
      price: 200000,
      categories: {
        1: 'Computing',
        4: 'Video',
      },
    },
    {
      id: 4,
      title: 'Tablet',
      price: 800000,
      categories: {
        1: 'Devices',
      },
    },
  ];

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
