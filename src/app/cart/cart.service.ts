import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/Product';
import { Cart } from './Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = "api/cart";
  cart: Cart = {
    productName: '',
    unitPrice: 0,
    quantity: 0,
    grandTotal: 0
  };

  constructor(private httpClient:HttpClient) { }
  addToCart(product: Product)
  {
    debugger;
    this.cart.productName = product.productName;
    this.cart.unitPrice = product.price;
    this.cart.quantity = 1;
    this.cart.grandTotal = product.price * this.cart.quantity;
    console.log(this.cart);

    return this.httpClient.post<Cart>(this.baseUrl,this.cart); 
  }

  getCart()
  {
    return this.httpClient.get<Cart[]>(this.baseUrl);
  }
}
