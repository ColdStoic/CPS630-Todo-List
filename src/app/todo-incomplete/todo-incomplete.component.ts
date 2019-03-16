import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-incomplete',
  templateUrl: './todo-incomplete.component.html',
  styleUrls: ['./todo-incomplete.component.css']
})
export class TodoIncompleteComponent implements OnInit {
  @Input() item: Object;
  @Input() index: Object;

  constructor(private todoItems: TodoItemsService) { }

  ngOnInit() {
  }

  complete() {
    this.item["complete"] = true;
  }

  remove() {
    this.todoItems.removeItem(this.index);
  }
}
