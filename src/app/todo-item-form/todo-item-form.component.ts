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
  addingTask = false;

  onAddingTask() {
    this.model = new TodoItem('', false, '');
    this.addingTask = true;
    setTimeout(function(){
      document.getElementById("task").focus();
    }, 100);
  }

  onSubmit() {
    this.addingTask = false;
    this.todoItems.addItem(this.model);
  }

  onCancel() {
    this.addingTask = false;
  }

  ngOnInit() {
  }
}
