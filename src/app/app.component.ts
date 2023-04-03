import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';
import { Observable } from 'rxjs';
import { TodoDto } from './api/models';
import { Store } from '@ngrx/store';
import * as Actions from './state/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  constructor(public dialog: MatDialog, private store: Store) {

  }

  openAddTodoDialog() {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
    });
    dialogRef.afterClosed().subscribe((todoTitle) => {
      if (todoTitle) {
        this.store.dispatch(Actions.addTodo({title: todoTitle, done: false}))
      }
    })
  }
}
