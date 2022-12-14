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
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    Ng2SearchPipeModule,
    RouterModule
  ],
  providers:[ProductService],
  exports:[ProductsComponent,SearchComponent,Ng2SearchPipeModule]
})
export class ProductsModule { }
