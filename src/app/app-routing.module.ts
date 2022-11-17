import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'' , redirectTo: '/home' , pathMatch:'full'},
  {
    path:'home',component: HomeComponent
  },
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart', component: CartComponent,canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
