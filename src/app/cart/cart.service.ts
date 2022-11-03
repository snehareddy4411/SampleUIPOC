import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/Product';
import { Cart } from './Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = "api/cart";
  

  constructor(private httpClient:HttpClient) { }
  addToCart(cart: Cart)
  {
    return this.httpClient.post<Cart>(this.baseUrl,cart); 
  }

  getCart()
  {
    return this.httpClient.get<Cart[]>(this.baseUrl);
  }
}
