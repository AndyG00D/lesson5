import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ShowBlock: boolean;
  constructor(){
    this.ShowBlock = true;
  }

  toggleShow(){
    this.ShowBlock = !this.ShowBlock;
  }
}
