import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoIncompleteComponent } from './todo-incomplete/todo-incomplete.component';
import { TodoCompleteComponent } from './todo-complete/todo-complete.component';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    TodoListComponent,
    TodoIncompleteComponent,
    TodoCompleteComponent,
    TodoItemFormComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
