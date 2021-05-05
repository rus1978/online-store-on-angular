import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop',
  template: `1{{title2}}2<router-outlet></router-outlet>`,
  styles: []
})
export class ShopComponent implements OnInit {

  constructor() { }

  @Input() title2: string;

  ngOnInit(): void {
  }

}
