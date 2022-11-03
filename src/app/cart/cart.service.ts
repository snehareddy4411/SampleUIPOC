import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
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

  removeFromCart(id: number)
  {
    return this.httpClient.delete<Cart>(this.baseUrl + '/' +id);
  }

  updateCartItems(cartId:number, updatedItem: Cart)
  {
    return this.httpClient.put<Cart>(this.baseUrl + '/' + cartId , updatedItem);
  }
  increaseQty(id,product) {
    return this.httpClient.put(this.baseUrl + '/'+id,product);
  }
  decreaseQty(id,product){
    return this.httpClient.put(this.baseUrl + '/'+id,product);
  }
}
