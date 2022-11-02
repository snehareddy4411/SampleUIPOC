import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductService, private router: Router) { }
  createProductForm: Product ={
    productName: '',
    imageUrl: '',
    productType: '',
    price: 0,
    description: '',
  };

  ngOnInit(): void {
  }

  create()
  {
    console.log(this.createProductForm);
    this.productService.createProduct(this.createProductForm)
    .subscribe({
      next: (data) => {
        this.router.navigate(["/products"])
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
}
