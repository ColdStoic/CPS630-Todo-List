import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  @Output()
  todoItems:EventEmitter<Object> = new EventEmitter();

  constructor() { }

  setTodoItems(json) {
    this.todoItems.emit(json);
    console.log(this.todoItems);
  }
}
