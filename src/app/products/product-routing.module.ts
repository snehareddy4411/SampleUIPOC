import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'create-product', component: CreateProductComponent, canActivate: [AuthGuard]},
  {path: 'edit-product/:id',component:EditProductComponent, canActivate: [AuthGuard]}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
