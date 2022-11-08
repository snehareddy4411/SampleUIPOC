import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:'' , component: ProductsComponent, pathMatch:'full',canActivate: [AuthGuard]},
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
