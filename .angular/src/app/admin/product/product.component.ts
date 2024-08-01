import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  editProuct: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editProuct = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      gstpercentage: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.loadProductData(productId);
    }
  }


  loadProductData(productId: number): void {
    this.api.get("products/" + productId).subscribe(
      (product: any) => {
        this.editProuct.patchValue(product);
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }


  save(productData: any) {
    const productId = this.route.snapshot.params['id'];

    if (productId) {
      this.api.put('products/' + productId, productData).subscribe(
        () => {
          console.log('Product updated successfully');
          this.router.navigate(['/admin/products']);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } 
    else {
      this.api.post('products/', productData).subscribe(
        () => {
          console.log('Product added successfully');
          this.router.navigate(['/admin/products']);
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }
}
