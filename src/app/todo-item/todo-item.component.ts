import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
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
