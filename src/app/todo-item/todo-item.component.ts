import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Object;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.item["complete"] = true;
  }
}
