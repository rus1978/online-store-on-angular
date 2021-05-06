import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../api-data.service';
import {ActivatedRoute} from '@angular/router';
import {PageData} from '../classes/page-data';
import {BasketService} from "../../basket.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public response: PageData;
  protected slug: string;

  constructor(
    protected apiDataService: ApiDataService,
    protected route: ActivatedRoute,
    private basket: BasketService
  ) {
    route.url.subscribe(val => {
      this.render();
    });
    // this.basket.setTotalSum();
  }


  protected render(): void
  {
    this.apiDataService.get('page/home')
      .subscribe((data) => {
        this.response = data;
      });
    this.basket.setTotalSum();
  }

  ngOnInit(): void
  {
    this.render();
  }
}
