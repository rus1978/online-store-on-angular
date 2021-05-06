import {Injectable, OnDestroy} from '@angular/core';
import {BasketData} from './shop/classes/basket';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private data: object;
  private keyStorage = 'basketData';
  public obServ: Subscriber<number>;
  public basketCnt: Observable<number>;

  constructor() {

    this.data = JSON.parse(localStorage.getItem(this.keyStorage));

    if (this.data === null){
        this.data = {};
    }

    this.basketCnt = new Observable((subscriber) => this.obServ = subscriber);
  }

  public add(item: BasketData): void
  {
    if (typeof this.data[item.code] === 'undefined'){
      this.data[item.code] = item;
    }else{
      this.data[item.code].qty += item.qty;
    }

    localStorage.setItem(this.keyStorage, JSON.stringify(this.data));
  }

  public setTotalSum(): number
  {
    let result = 0;

    if (this.data){
      Object.entries(this.data).forEach(([key, value]) => {
        result += value.price * value.qty;
      });
    }

    if (typeof this.obServ !== 'undefined'){
      this.obServ.next(result);
    }

    return result;
  }
}
