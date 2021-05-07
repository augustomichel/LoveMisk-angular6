import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'lm-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do LoveMIsk App!'

  constructor() { }

  ngOnInit() {
  }

}
