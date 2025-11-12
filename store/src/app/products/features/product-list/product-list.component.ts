import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductsStateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsService, ProductsStateService]
})
export default class ProductListComponent {

  productsState = inject(ProductsStateService)


}
