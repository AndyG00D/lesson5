import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { TestComponentComponent } from './test-component/test-component.component';
import { TodoListComponent } from './todoList/todoList.component';
import { TodoItemComponent } from './todoList/todoItem/todoItem.component';
import  { DataService } from "./todoList/data.service";


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private dataService: DataService){

  }

}
