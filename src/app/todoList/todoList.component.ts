import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo";
import  { DataService } from "./data.service";

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})


export class TodoListComponent implements OnInit{
  constructor(private dataService: DataService ) { }
  public todoData: Todo[];
  // constructor(private){}

  onCatch(emit:Todo) {
    // console.log(emit.tit;
  }

  ngOnInit(){
    this.dataService.getNewTodo().subscribe((data: Todo) => {
      console.log(data);
    });
  }

}
