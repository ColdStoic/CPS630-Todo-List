import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-complete',
  templateUrl: './todo-complete.component.html',
  styleUrls: ['./todo-complete.component.css']
})
export class TodoCompleteComponent implements OnInit {
  @Input() item: Object;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.item["complete"] = false;
  }
}
