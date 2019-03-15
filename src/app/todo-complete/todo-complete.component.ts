import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-complete',
  templateUrl: './todo-complete.component.html',
  styleUrls: ['./todo-complete.component.css']
})
export class TodoCompleteComponent implements OnInit {
  @Input() item: Object;
  @Input() index: Object;

  constructor(private todoItems: TodoItemsService) { }

  ngOnInit() {
  }

  uncomplete() {
    this.item["complete"] = false;
  }

  remove() {
    this.todoItems.removeItem(this.index);
  }
}
