import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
]

@NgModule({
  declarations: [
    CartComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopModule { }
