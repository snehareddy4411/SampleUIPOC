import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId = this.activatedRoute.snapshot.params['id'];
  productData : Product = {
    productName: '',
    imageUrl: '',
    productType: '',
    price: 0,
    description: ''
  } ;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getExistingProductData();
  }

  getExistingProductData()
  {
    this.productService.getProduct(this.productId).subscribe((data) =>
    {
      this.productData = data;
    });
  }

  updateProduct()
  {
    if(window.confirm("Are you sure you want to update details??"))
    {
      this.productService.updateProduct(this.productData).subscribe((data)=>
      {
        this.router.navigate(["/products"]);
      });
    }

  }

}
