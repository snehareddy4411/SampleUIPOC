import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart/Cart';
import { CartService } from '../cart/cart.service';
import { AuthGuard } from '../guard/auth.guard';
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
  role: string = '';
  cartLength = 0;

  constructor(private productService: ProductService, 
    private cartService: CartService, 
    private router: Router, 
    private authGuardService: AuthGuard) { 
    this.cartService.cartlength$.subscribe( updatedNumber => {
      this.cartLength = updatedNumber
    });
  }

  ngOnInit(): void {
    this.role = this.authGuardService.role;
    this.authGuardService.variableChange
      .subscribe(res=>{
            this.role = res['Role'];
      });
    this.loadProducts();
    this.loadCart();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

  loadCart()
  {
    this.cartService.getCart().subscribe(
      response => {
        this.cartList = response;
        this.cartLength = response.length;
        this.cartService.cartlength$.next(this.cartLength);
      });
  }
  onDelete(id: number) {
    if (window.confirm("Are you sure, you want to delete??")) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.router.navigate(['/cart']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  addToCart(product: Product) {
    var productExistInCart = this.cartList.find(({ productName }) => productName === product.productName);
    
    if (!productExistInCart) {
      //if product is not in cart
      this.cartItem.productName = product.productName;
      this.cartItem.imageUrl = product.imageUrl;
      this.cartItem.quantity = 1;
      this.cartItem.unitPrice = product.price;
      this.cartItem.subTotal = product.price * this.cartItem.quantity;
      this.cartService.addToCart(this.cartItem).subscribe({
        next: () => {
          this.loadCart();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    else
    {
      //if product is in cart update the quantity
      productExistInCart.quantity += 1;
      productExistInCart.subTotal = product.price * productExistInCart.quantity;
      this.cartService.updateCartItems(productExistInCart).subscribe();
    }
  }

}
