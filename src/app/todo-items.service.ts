import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  public todoItems: object;

  constructor() { }

  setTodoItems(json) {
    this.todoItems = json;
    console.log("Cyka Blyat");
    console.log(this.todoItems);
  }
}
