import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';
import { EventEmitter, HostListener, Output } from '@angular/core';

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
  uploaded = false;

  @Output() filesDropped =  new EventEmitter<FileList>();
  @Output() filesHovered =  new EventEmitter<boolean>();

  constructor (private todoItems: TodoItemsService) { }
  
  ngOnInit() {
    //this.uploaded = true;
  }

  onFileUpload(event) {
    this.jsonFile = event.target.files[0]
    this.parseFile(this.jsonFile);
  }

  parseFile(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.jsonText = fileReader.result as string;
      this.json = JSON.parse(this.jsonText);
      this.duplicationRemover();
      this.todoItems.setTodoItems(this.json);
      this.uploaded = true;
    }
    fileReader.readAsText(this.jsonFile);
  }

  duplicationRemover() {
    var isDuplicate = false;
    for (var i = 0; i < this.json["todo"].length; ++i) {
      var task = this.json["todo"][i];
      for (var j = (i + 1); j < this.json["todo"].length; ++j) {
        var task2 = this.json["todo"][j];
        if(task["task"].toLowerCase() == task2["task"].toLowerCase()) {
          this.json["todo"].splice(j, 1);
        }
      }
    }
  }
  
  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();

    let transfer = $event.dataTransfer;
    this.filesDropped.emit(transfer.files);
    this.filesHovered.emit(false);
    this.jsonFile = transfer.files[0];
    this.parseFile(this.jsonFile);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    event.preventDefault();

    this.filesHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    this.filesHovered.emit(false);
  }
}
