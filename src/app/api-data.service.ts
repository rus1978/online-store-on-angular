import {Injectable} from '@angular/core';
// import {ProductData} from './shop/catalog/classes/product-data';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
// import {Router, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Meta} from '@angular/platform-browser';
import {PageData} from './page/classes/page-data';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService
{
  // tslint:disable-next-line:ban-types
  private callback: Function;
  private data: any;
  private isLock: boolean;
  private isSetMetaTags: boolean;

  constructor(
    private httpClient: HttpClient,
    private meta: Meta,
    private titleService: Title) { }

  public get(slug: string): ApiDataService
  {
    if (typeof this.data !== 'undefined'){
      this.response(slug);
    }else{
      if (this.isLock){
        return this;
      }
      this.isLock = true;
      this.httpClient.get(environment.apiUrl + 'all')
        .subscribe((data: any) => {
          this.data = data;
          this.response(slug);
          this.isLock = false;
        });
    }

    return this;
  }

  private getData(slug: string): any
  {
    let data: any =  this.data;
    let result: any;
    slug.split('/').forEach((key) => {
      if (typeof data[key] !== 'undefined'){
        data = data[key];
        result = data;
      }else{
        result = null;
      }
    });
    return result;
  }

  private response(slug: string): void
  {
    const data: PageData = this.getData(slug);

    if (!data){
      return;
    }

    this.callback(data);

    if (this.isSetMetaTags === true){
      this.titleService.setTitle(data.title);
      this.meta.updateTag({name: 'description', content: data.metaDescription});
      console.log('set data service !!!!!!!!!!!!!!!!!!!!!', data.title);
    }
  }

  // tslint:disable-next-line:ban-types
  public subscribe(callback: Function, isSetMetaTags: boolean = true): void
  {
    this.isSetMetaTags = isSetMetaTags;
    this.callback = callback;
  }
}
