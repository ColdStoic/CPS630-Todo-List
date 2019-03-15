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
            "description": "Crown Royal is a blended Canadian whisky owned by Diageo, which purchased the brand when the Seagram portfolio was dissolved in 2000. It is the top-selling Canadian whisky in the United States."
        },
        {
            "task": "Buy whiskey",
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
