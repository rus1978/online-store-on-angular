import {AfterViewChecked, Component, OnInit} from '@angular/core';
import { faFacebook, faInstagram, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {BasketService} from './basket.service';
import {ActivatedRoute} from "@angular/router";
// import { library, icon } from '@fortawesome/fontawesome-svg-core';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked{
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faShoppingCart = faShoppingCart;
  currentYear: number = new Date().getFullYear();
  public basketCount: number;

  constructor(private basket: BasketService, private route: ActivatedRoute) {
    route.url.subscribe(val => {
      this.basketCount = this.basket.getTotalSum();
      console.log('constructor app', this.basket.getTotalSum());
    });
  }

  ngAfterViewChecked(): void {
  }

  ngOnInit(): void {
    this.basketCount = 24; // this.basket.getTotalSum();
    console.log('ngOnInit app');
    setTimeout(() => {
      this.basketCount = 28;
    }, 2000);
  }
}
