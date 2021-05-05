import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../api-data.service';
import {ActivatedRoute} from '@angular/router';
import {PageData} from '../classes/page-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public response: PageData;
  protected slug: string;

  constructor(
    protected apiDataService: ApiDataService,
    protected route: ActivatedRoute
  ) {
    route.url.subscribe(val => {
      this.render();
    });
  }

  protected render(): void
  {
    this.apiDataService.get('page/' + this.route.routeConfig.path)
      .subscribe((data) => {
        this.response = data;
      });
  }

  ngOnInit(): void
  {
    this.render();
  }

}
