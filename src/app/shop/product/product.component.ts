import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../api-data.service';
import {ActivatedRoute} from '@angular/router';
import {ProductData} from '../classes/product-data';
import {Meta, Title} from '@angular/platform-browser';

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
    private titleService: Title
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
  }

  ngOnInit(): void
  {

    this.render();
  }
}
