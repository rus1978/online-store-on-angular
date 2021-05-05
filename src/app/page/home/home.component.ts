import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../api-data.service';
import {ActivatedRoute} from '@angular/router';
import {PageData} from '../classes/page-data';


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
  ) {
    route.url.subscribe(val => {
      this.render();
    });
  }

  protected render(): void
  {
    this.apiDataService.get('page/home')
      .subscribe((data) => {
        this.response = data;
      });
  }

  ngOnInit(): void
  {
    this.render();
  }
}
