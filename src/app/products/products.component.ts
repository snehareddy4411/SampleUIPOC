import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/Cart';
import { CartService } from '../cart/cart.service';
import { AuthGuard } from '../guard/auth.guard';
import { NotificationService } from '../notification.service';
import { Product } from './Product';
import { ProductService } from './product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  cartList: Cart[];
  cartItem: Cart = {
    productName: '',
    unitPrice: 0,
    quantity: 0,
    subTotal: 0,
    imageUrl: ''
  };
  searchText: string = '';
  role: string = '';
  cartLength = 0;

  constructor(private productService: ProductService,
    private cartService: CartService,
    private authGuardService: AuthGuard,
    private toastr: NotificationService,
    ) {
    this.cartService.cartlength$.subscribe(updatedNumber => {
      this.cartLength = updatedNumber
    });
  }

  ngOnInit(): void {
    this.role = this.authGuardService.role;
    this.authGuardService.variableChange
      .subscribe(res => {
        this.role = res['Role'];
      });
    this.loadProducts();
    this.loadCart();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

  loadCart() {
    this.cartService.getCart().subscribe(
      response => {
        this.cartList = response;
        this.cartLength = response.length;
        this.cartService.cartlength$.next(this.cartLength);
      });
  }
  onDelete(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      showCancelButton: true,
      confirmButtonColor: '#DC143C',
      confirmButtonText: 'Yes, delete it',
      customClass: {
        title: 'custom-title-class',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe({
            next: () => {
              this.toastr.showSuccess("Product deleted successfully.");
              this.loadProducts();
            }
          });
      } else if (result.isDenied) {
      }
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  addToCart(product: Product) {
    var productExistInCart = this.cartList.find(({ productName }) => productName === product.productName);

    if (!productExistInCart) {
      //if product is not in cart
      this.cartItem.productName = product.productName;
      this.cartItem.imageUrl = product.imageUrl;
      this.cartItem.quantity = 1;
      this.cartItem.unitPrice = product.price;
      this.cartItem.subTotal = product.price * this.cartItem.quantity;
      this.cartService.addToCart(this.cartItem).subscribe({
        next: () => {
          this.loadCart();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    else {
      //if product is in cart update the quantity
      productExistInCart.quantity += 1;
      productExistInCart.subTotal = product.price * productExistInCart.quantity;
      this.cartService.updateCartItems(productExistInCart).subscribe();
    }
  }

}
