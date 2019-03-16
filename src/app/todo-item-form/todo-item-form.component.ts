import { Component, OnInit } from '@angular/core';
import { TodoItem }    from '../todo-item';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.css']
})
export class TodoItemFormComponent implements OnInit {
  constructor(private todoItems: TodoItemsService) { }

  model = new TodoItem('', false, '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.todoItems.addItem(this.model);
    console.log(this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newTodoItem() {
    this.model = new TodoItem('', false, '');
  }

  ngOnInit() {
  }
}
