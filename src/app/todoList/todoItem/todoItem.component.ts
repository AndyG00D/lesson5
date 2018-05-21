import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Todo } from '../todo';
// import {Output, ViewEncapsulation} from "@angular/compiler/src/core";

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent{


  @Input() todo:Todo[];
  @Output() onChangedStatus = new EventEmitter<Todo>();


  constructor(
  ) {
    this.todo= [{title: "Todo 1"}, {title: "Todo 2"}];

  }
  //
  // onClick(){
  //   console.log('click');
  // }



  public toggleStatus(){
    this.onChangedStatus.emit(this.todo[0]);
  }
}
