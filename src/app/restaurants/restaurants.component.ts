
import {from as observableFrom,  Observable } from 'rxjs';

import {catchError, switchMap, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'lm-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity:0,
        "max-height":"0px"
      })),
      state('visible', style({
        opacity:1,
        "max-height":"70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'

  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl 

  constructor(private RestaurantsService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {
     
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm => 
        this.RestaurantsService.restaurants(searchTerm).pipe(
        catchError(error=>observableFrom([])))),)
      .subscribe(restaurants => this.restaurants = restaurants)

    this.RestaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
