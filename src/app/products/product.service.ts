import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Product } from "./Product";

@Injectable()
export class ProductService{
    private baseUrl = "api/products";
    constructor(private httpClient: HttpClient) {}

    getProducts()
    {
        return this.httpClient.get<Product[]>(this.baseUrl);
    }   
    
    getProduct(id: number)
    {
        return this.httpClient.get<Product>(this.baseUrl + '/' + id);
    }

    createProduct(product: Product)
    {
        return this.httpClient.post<Product>(this.baseUrl,product);
    }

    deleteProduct(id: number)
    {
        return this.httpClient.delete<Product>(this.baseUrl + '/' +id);
    }

    updateProduct(id: number, product: Product)
    {
        return this.httpClient.put<Product>( this.baseUrl + '/' + id , product);
    }

    // addToCart(product: Product)
    // {
    //    return this.cartService.addToCart(product);
    // }
}