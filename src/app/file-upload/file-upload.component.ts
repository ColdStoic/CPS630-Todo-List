import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  url = '../../assets/todo.json';
  jsonFile: File;
  jsonText: string;
  json: object;

  constructor (private todoItems: TodoItemsService) { }
  
  ngOnInit() {
  }

  onFileChanged(event) {
    this.jsonFile = event.target.files[0]
    this.parseFile(this.jsonFile);
  }

  parseFile(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.jsonText = fileReader.result as string;
      this.json = JSON.parse(this.jsonText);
      this.todoItems.setTodoItems(this.json);
    }
    fileReader.readAsText(this.jsonFile);
  }
}
