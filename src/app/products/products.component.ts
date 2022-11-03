import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart/Cart';
import { CartService } from '../cart/cart.service';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  cartItem:Cart={
    productName: '',
    unitPrice: 0,
    quantity: 0,
    subTotal: 0,
    imageUrl: ''
  };
  searchText: string ='';

  constructor(private productService: ProductService,private cartService: CartService, private router:Router) { }

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
      this.productService.deleteProduct(id).subscribe({
        next: (data) => {
          this.loadProducts();
        },
        error: (error) =>{
          console.log(error);
        }
      });
    }
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  addToCart(product: Product)
  {
    this.cartItem.productName=product.productName;
    this.cartItem.imageUrl = product.imageUrl;
    this.cartItem.quantity=1;
    this.cartItem.unitPrice=product.price;
    this.cartItem.subTotal=product.price * this.cartItem.quantity;
    this.cartService.addToCart(this.cartItem).subscribe({
      next: (data) => {
        this.router.navigate(["/cart"])
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
  
}
