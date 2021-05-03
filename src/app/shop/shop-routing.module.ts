import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from './shop.component';
import {ProductComponent} from './product/product.component';
import {CatalogComponent} from './catalog/catalog.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'catalog'},
      {path: 'catalog', component: CatalogComponent},
      {path: 'product', component: ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
