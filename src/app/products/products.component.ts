import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { CartService } from '../cart/cart.service';
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  searchText: string ='';
<<<<<<< HEAD
  constructor(private productService: ProductService,private cartService: CartService, private router:Router) { }
=======
  constructor(private productService: ProductService, private router:Router) { }
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts()
  {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

  onDelete(id: number)
  {
    if(window.confirm("Are you sure, you want to delete??"))
    {
      this.productService.deleteProduct(id).subscribe((data) =>
      {
          
      });
    }
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

<<<<<<< HEAD
  addToCart(product: Product)
  {
    this.cartService.addToCart(product);
  }
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb
  
}
