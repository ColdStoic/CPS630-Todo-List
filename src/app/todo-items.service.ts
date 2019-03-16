import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  @Output()
  todoItems:EventEmitter<Object> = new EventEmitter();
  json = Object;

  constructor() { }

  setTodoItems(json) {
    this.json = json;
    this.todoItems.emit(json);
    console.log(this.todoItems);
  }

  addItem(item) {
    this.json["todo"].push(item);
  }

  removeItem(index) {
    this.json["todo"].splice(index, 1);
  }
}
