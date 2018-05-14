import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { TestComponentComponent } from './test-component/test-component.component';
import { TodoListComponent } from './todoList/todoList.component';
import { TodoItemComponent } from './todoList/todoItem/todoItem.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
