import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Product } from "./Product";

@Injectable()
export class ProductService{
    //private baseUrl = "api/products";
    private baseUrl = "http://localhost:5262/EKartProduct";
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

    updateProduct(product: Product)
    {
        debugger;
        return this.httpClient.put<Product>( this.baseUrl , product);
    }

}