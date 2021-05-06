import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {CategoryData} from '../classes/category-data';
import { ActivatedRoute} from '@angular/router';
import {ApiDataService} from '../../api-data.service';
import {BasketService} from '../../basket.service';
import {BasketData} from '../classes/basket';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ApiDataService, BasketService]
})
export class CatalogComponent implements OnInit, AfterViewChecked
{
  public response: CategoryData;
  public test: number;

  constructor(
    private apiDataService: ApiDataService,
    private route: ActivatedRoute,
    private basket: BasketService
  ) {
    route.url.subscribe(val => {
      this.render();
    });
  }

  private render(): void
  {
      const slug: string = 'category/' + this.route.snapshot.params.code;
      console.log('categoryComp', slug);
      this.test = this.basket.getTotalSum();
      console.log('sum in service', this.basket.getTotalSum());

      this.apiDataService.get(slug)
        .subscribe((data) => {
          this.response = data;
        });
  }

  ngOnInit(): void
  {
    this.render();
  }

  ngAfterViewChecked(): void {
  }

  addCart(item: BasketData, event): void
  {
    event.target.classList.add('bought');
    this.basket.add(item);
    this.test = this.basket.getTotalSum();
    console.log('sum', this.basket.getTotalSum());

  }
}
