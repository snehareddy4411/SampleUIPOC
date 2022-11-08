import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
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
  cartList: Cart[];
  cartItem: Cart = {
    productName: '',
    unitPrice: 0,
    quantity: 0,
    subTotal: 0,
    imageUrl: ''
  };
  searchText: string = '';
  username: string = '';
  role: string = '';

  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getUserNameRole().userName;
    this.role = this.authService.getUserNameRole().role;
    this.loadProducts();
    this.cartService.getCart().subscribe(
      response => {
        this.cartList = response
      });

  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

  onDelete(id: number) {
    if (window.confirm("Are you sure, you want to delete??")) {
      this.productService.deleteProduct(id).subscribe({
        next: (data) => {
          this.loadProducts();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  addToCart(product: Product) {
    var productExistInCart = this.cartList.find(({ productName }) => productName === product.productName);
    console.log(productExistInCart);
    //if product is not in cart
    if (!productExistInCart) {
      this.cartItem.productName = product.productName;
      this.cartItem.imageUrl = product.imageUrl;
      this.cartItem.quantity = 1;
      this.cartItem.unitPrice = product.price;
      this.cartItem.subTotal = product.price * this.cartItem.quantity;
      this.cartService.addToCart(this.cartItem).subscribe({
        next: (data) => {
          this.router.navigate(["/cart"])
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    else
    {
      productExistInCart.quantity += 1;
      productExistInCart.subTotal = product.price * productExistInCart.quantity;
      this.cartService.updateCartItems(productExistInCart).subscribe();
    }
  }

}
