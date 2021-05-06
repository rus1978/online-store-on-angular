import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../api-data.service';
import {ActivatedRoute} from '@angular/router';
import {ProductData} from '../classes/product-data';
import {Meta, Title} from '@angular/platform-browser';
import {BasketData} from "../classes/basket";
import {BasketService} from "../../basket.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public response: ProductData;

  constructor(
    private apiDataService: ApiDataService,
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title,
    private basket: BasketService
  ) {
    route.url.subscribe(val => {
      this.render();
    });
  }

  private render(): void
  {
    const slug: string = 'category/'
      + this.route.snapshot.params.categoryCode
      + '/products/'
      + this.route.snapshot.params.productCode;
    this.apiDataService.get(slug)
      .subscribe((data) => {
        this.response = data;

        // Здесь задаются теги по шаблону товаров
        this.titleService.setTitle('Товарчик с названием ' + data.name + ' купить недорого');
        this.meta.updateTag({name: 'description', content: 'Описание мета тега дескр для товара ' + data.name});
      }, false);
    this.basket.setTotalSum();
  }

  ngOnInit(): void
  {

    this.render();
  }

  addCart(event): void
  {
    event.target.classList.add('bought');
    this.basket.add({
      code: this.route.snapshot.params.productCode,
      name: this.response.name,
      price: this.response.price,
      image: this.response.image,
      qty: 1
    });
    this.basket.setTotalSum();
  }
}
