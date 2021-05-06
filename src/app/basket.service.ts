import {Injectable, OnDestroy} from '@angular/core';
import {BasketData} from './shop/classes/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService implements OnDestroy {
  private data: object;
  private keyStorage = 'basketData';

  constructor() {

    this.data = JSON.parse(localStorage.getItem(this.keyStorage));

    if (this.data === null){
        this.data = {};
    }
  }

  public add(item: BasketData): void
  {
    if (typeof this.data[item.code] === 'undefined'){
      this.data[item.code] = item;
    }else{
      this.data[item.code].qty += item.qty;
    }

    console.log(this.data);
  }

  public getTotalSum(): number
  {
    let result = 0;

    if (this.data){
      Object.entries(this.data).forEach(([key, value]) => {
        result += value.price * value.qty;
      });
    }
    return result;
  }

  ngOnDestroy(): void {
    localStorage.setItem(this.keyStorage, JSON.stringify(this.data));
  }
}
