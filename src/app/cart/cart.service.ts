import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //private baseUrl = "api/cart";
  private baseUrl = "http://localhost:5005/EKartCart";
  
  constructor(private httpClient:HttpClient) { }
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

  increaseQty(id, product) 
  {
    return this.httpClient.put(this.baseUrl + '/'+id,product);
  }

  decreaseQty(id, product)
  {
    return this.httpClient.put(this.baseUrl + '/'+id,product);
  }
}
