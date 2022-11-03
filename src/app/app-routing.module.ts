import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:'' , redirectTo:'products', pathMatch:'full'},
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: {breadcrumb: 'Home'}
  },
  {
    path: 'cart', component: CartComponent, data: {breadcrumb: 'Shopping Cart'}
  }
  // { path:'**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
