import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:'' , redirectTo:'products', pathMatch:'full'},
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
<<<<<<< HEAD
  },
  {
    path: 'cart', component: CartComponent
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb
  }
  // { path:'**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
