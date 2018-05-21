import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { TestComponentComponent } from './test-component/test-component.component';
import { TodoListComponent } from './todoList/todoList.component';
import { TodoItemComponent } from './todoList/todoItem/todoItem.component';
import  { DataService } from "./todoList/data.service";

import { HttpClientModule} from "@angular/common/http";
import {UserService} from "./user.service";
import {AddItemComponent} from "./add-item-component/add-item-component";


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TodoListComponent,
    TodoItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private dataService: DataService, private userService: UserService){

  }

}
