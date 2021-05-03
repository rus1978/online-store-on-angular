import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ShopComponent,
    CatalogComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
