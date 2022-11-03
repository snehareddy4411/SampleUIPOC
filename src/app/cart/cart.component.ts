import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './Cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] ;
  @ViewChild('quantity') quantity:ElementRef;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems()
  {
    this.cartService.getCart().subscribe((data) =>
    {
      this.cart = data;
    }); 

    
  }

  removeFromCart(id: number)
  {
    this.cartService.removeFromCart(id).subscribe((data) =>
    {
      this.router.navigate(['/cart']);
    });
  }

  quantityUpdated(cartId:number ,product: Cart)
  {
    debugger;
    product.quantity = Number(this.quantity.nativeElement.value);
    product.subTotal = product.unitPrice * product.quantity;
    this.cartService.updateCartItems(cartId,product).subscribe((data) =>{
    });
  }
  
  increamentQTY(id,product, quantity): void {
    debugger;
    product.quantity = ++quantity;
    product.subTotal = product.unitPrice * product.quantity;
    this.cartService.increaseQty(id,product).subscribe(() => {
      this.loadCartItems();
    });
  }

  decrementQty(id,product, quantity): void {
    debugger;
    product.quantity = --quantity;
    product.subTotal = product.unitPrice * product.quantity;
    this.cartService.decreaseQty(id,product).subscribe(() => {
      this.loadCartItems();
    });
  }

}
