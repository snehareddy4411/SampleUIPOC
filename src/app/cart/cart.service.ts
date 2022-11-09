import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from './Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //private baseUrl = "api/cart";
  private baseUrl = "http://localhost:5005/EKartCart";
  lengthOfCart$ = new Subject<number>();
  
  constructor(private httpClient:HttpClient) {  }
  addToCart(cart: Cart)
  {
    return this.httpClient.post<Cart>(this.baseUrl,cart); 
  }

  getCart()
  {
    return this.httpClient.get<Cart[]>(this.baseUrl);
  }

  removeFromCart(id: number)
  {
    return this.httpClient.delete<Cart>(this.baseUrl + '/' +id);
  }

  updateCartItems(updatedItem: Cart)
  {
    return this.httpClient.put<Cart>(this.baseUrl, updatedItem);
  }

  increaseQty(product) 
  {
    return this.httpClient.put(this.baseUrl ,product);
  }

  decreaseQty(product)
  {
    return this.httpClient.put(this.baseUrl ,product);
  }

  getCartItemById(id: number)
  {
    return this.httpClient.get<Cart>(this.baseUrl + '/' + id);
  }

  cartLength()
  {
    return this.httpClient.get<number>(this.baseUrl + '/CartLength');
  }

}
