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
      // {path: '', pathMatch: 'full', redirectTo: 'catalog'}, // list all category
      {path: ':code', component: CatalogComponent, /*data: {component: 'category'}*/},
      {path: ':categoryCode/:productCode', component: ProductComponent},
      {path: '**', redirectTo: 'catalog/sushi'} // default shop page
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
