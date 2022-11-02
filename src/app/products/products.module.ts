import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    SearchComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    RouterModule
  ],
  providers:[ProductService],
  exports:[ProductsComponent]
})
export class ProductsModule { }
