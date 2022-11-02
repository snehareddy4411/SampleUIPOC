import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  searchText: string ='';
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts()
  {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

  onDelete(id: number)
  {
    if(window.confirm("Are you sure, you want to delete??"))
    {
      this.productService.deleteProduct(id).subscribe((data) =>
      {
          
      });
    }
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  
}
