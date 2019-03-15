import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Object;

  constructor(private todoItems: TodoItemsService) { }

  ngOnInit() {
    this.todoItems.todoItems.subscribe(data =>
      this.items = data
    )
  }
}
