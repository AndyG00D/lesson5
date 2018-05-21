import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service"
import { User } from "./user.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public birthday: Date;
  public users: User[] = [];

  ShowBlock: boolean;

  constructor(private UserService){
    this.ShowBlock = true;
    this.birthday = new Date(1988,10,15);
  }

  toggleShow(){
    this.ShowBlock = !this.ShowBlock;
  }

  public ngOnInit(){
    this.UserService.getUsersList().subscribe( (res: User[]) => {
      this.users = res;
      console.log(this.users);
      }
    );
  }

}
