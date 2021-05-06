import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { faFacebook, faInstagram, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {BasketService} from './basket.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit{
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faShoppingCart = faShoppingCart;
  currentYear: number = new Date().getFullYear();
  public basketCnt: Observable<number>;

  constructor(private basket: BasketService, private route: ActivatedRoute) {
    this.basketCnt = this.basket.basketCnt;
    // route.url.subscribe(val => {
    // });
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');

  }

  ngOnInit(): void {
   // this.basket.setTotalSum();

   // console.log('ngOnInit');


  }
}
