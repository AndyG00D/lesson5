import { Component } from '@angular/core';
import {Todo} from "./todo";
// import  { DataService } from "./data.service";

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})


export class TodoListComponent {
  constructor() { }
  // public todoList: Todo[];
  // constructor(private){}

  onCatch(emit:Todo) {
    console.log(emit.title);
  }
}
