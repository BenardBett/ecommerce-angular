import { Routes } from '@angular/router';
import { provideRouter, RouterModule, RouterStateSnapshot, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { CartComponent } from './cart/cart.component';  
import { CheckoutComponent } from './checkout/checkout.component';  
import path from 'path';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},   

];

export const appRoutingProviders = provideRouter(routes);