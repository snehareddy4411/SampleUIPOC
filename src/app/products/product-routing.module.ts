import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent,data: {breadcrumb: 'Home'}},
  {path: 'create-product', component: CreateProductComponent,data: {breadcrumb: 'Create New Product'}},
  {path: 'edit-product/:id',component:EditProductComponent,data: {breadcrumb: 'Update Product'}}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
