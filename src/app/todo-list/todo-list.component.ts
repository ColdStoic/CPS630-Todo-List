import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Object;
  json = 
  `{
    "todo":[
        {
            "task": "Complete this lab",
            "complete": false,
            "description": "description of the task"
        },
        {
            "task": "Cyka Blyat",
            "complete": true,
            "description": "description of the task"
        }
    ]
}`

  constructor(private todoItems: TodoItemsService) { }

  ngOnInit() {
    this.todoItems.todoItems.subscribe(data =>
      this.items = data
    )

    var json2 = JSON.parse(this.json)
    this.todoItems.setTodoItems(json2);
  }
}
