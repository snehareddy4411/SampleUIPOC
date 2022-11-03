import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { CartService } from "../cart/cart.service";
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb
import { Product } from "./Product";

@Injectable()
export class ProductService{
    private baseUrl = "api/products";

<<<<<<< HEAD
    constructor(private httpClient: HttpClient, private cartService:CartService) {}
=======
    constructor(private httpClient: HttpClient) {}
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb

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
<<<<<<< HEAD

    // addToCart(product: Product)
    // {
    //    return this.cartService.addToCart(product);
    // }
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb
}