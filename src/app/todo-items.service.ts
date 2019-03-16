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
  }

  addItem(item) {
    var isDuplicate = false;
    for (var index = 0; index < this.json["todo"].length; ++index) {
      var task = this.json["todo"][index];
      if(task["task"].toLowerCase() == item["task"].toLowerCase()) {
        alert("Cannot add duplicate tasks.");
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      this.json["todo"].push(item);
    }
  }

  removeItem(index) {
    this.json["todo"].splice(index, 1);
  }
}
