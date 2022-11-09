import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './Cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [] ;
  cartLength : number = 0;
  total: number = 0 ;
  value: number = 0;
  @ViewChild('quantity') quantity:ElementRef;
  lengthOfCart : number = 0;

  constructor(private cartService:CartService,private router:Router) { this.loadCartItems(); }

  ngOnInit(): void {
    
  }

  loadCartItems()
  {
    this.cartService.getCart().subscribe((data) =>
    {
      debugger;
      this.cart = data;
      this.lengthOfCart = data.length;
      this.calculateTotal(this.cart,this.total=0);
      this.cartService.lengthOfCart$.subscribe();
      this.cartService.lengthOfCart$.next(this.lengthOfCart);
      console.log("Cart length updated in Cart" + this.lengthOfCart);
    }); 
    
  }

  removeFromCart(id: number)
  {
    this.cartService.removeFromCart(id).subscribe(() =>
    {
      this.loadCartItems();
      //this.router.navigate(['/cart']);
    });
  }

  increamentQTY(product, quantity): void {
    product.quantity = ++quantity;
    product.subTotal = product.unitPrice * product.quantity;
    this.cartService.increaseQty(product).subscribe(() => {
      this.loadCartItems();
    });
  }

  decrementQty(product, quantity): void {
    if(quantity<2)
    {
    }
    else
    {
      product.quantity = --quantity;
      product.subTotal = product.unitPrice * product.quantity;
      this.cartService.decreaseQty(product).subscribe(() => {
        this.loadCartItems();
      });
    }
  }

  calculateTotal(data, total)
  {
    debugger;
    this.value=data     
    for(let j=0;j<data.length;j++)
    {   
        this.total += (this.value[j].subTotal);
    }
  }

}
