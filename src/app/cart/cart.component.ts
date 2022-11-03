import { Component, OnInit } from '@angular/core';
import { Cart } from './Cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] ;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data) =>
    {
      this.cart = data;
    }); 
  }

}
