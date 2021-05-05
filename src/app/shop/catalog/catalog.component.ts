import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {CategoryData} from '../classes/category-data';
import { ActivatedRoute} from '@angular/router';
import {ApiDataService} from '../../api-data.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, AfterViewChecked
{
  public response: CategoryData;

  constructor(
    private apiDataService: ApiDataService,
    private route: ActivatedRoute
  ) {
    route.url.subscribe(val => {
      this.render();
    });
  }

  private render(): void
  {
      const slug: string = 'category/' + this.route.snapshot.params.code;
      console.log('categoryComp', slug);

      this.apiDataService.get(slug)
        .subscribe((data) => {
          this.response = data;
        });
  }

  ngOnInit(): void
  {
    console.log('ngOnInit');

    this.render();
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

}
