import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import {BasketService} from '../basket.service';


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
export class ShopModule {
  // @ts-ignore
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShopModule,
      providers: [ BasketService ]
    };
  }
}
