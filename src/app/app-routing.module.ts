import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard]
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
