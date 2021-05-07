import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lm-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number{
    return this.delivery + this.itemsValue
  }

}
