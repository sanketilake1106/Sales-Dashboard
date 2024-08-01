import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
    this.refresProductsList();
  }

  loadProducts() {
    this.api.get('products/').subscribe(
      (data: any) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  private refresProductsList(): void {
    // Fetch the updated list of Products after delete
    this.loadProducts();
  }

  editProduct(productId: number) {
    this.router.navigate(['/admin/product/' + productId]);
  }

  deleteProduct(productId: number): void { 
    this.api.delete('products/' + productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.refresProductsList(); // Refresh the list after delete
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
   }
}
