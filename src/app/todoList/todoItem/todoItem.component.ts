import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css']
})
export class TodoItemComponent{
  test: string = "Hello";

  constructor() { }

  onClick(){
    console.log('click');
  }
}
