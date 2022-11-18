import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { Product } from '../products/Product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: string;
  products: Product[];
  loggedIn: boolean;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

}
