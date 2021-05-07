import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'lm-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('restaurantAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready',[
        style({opacity: 0, transform: 'translate(-30px,-10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})

export class RestaurantComponent implements OnInit {

  restaurantState = 'ready'

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
