import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoDto } from 'src/app/api/models';
import { getTodos } from 'src/app/state/todos.actions';
import * as Selectors from 'src/app/state/todos.selectors';
import * as Actions from 'src/app/state/todos.actions';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  loading$: Observable<boolean>;
  todos$: Observable<ReadonlyArray<TodoDto>>;

  constructor(private store: Store) {
    this.loading$ = this.store.select(Selectors.loadingSelector);
    this.todos$ = this.store.select(Selectors.todosSelector);
    this.store.dispatch(getTodos());
  }

  onRemoveTodo(id: number) {
    this.store.dispatch(Actions.deleteTodo({id}));
  }

  onModifyTodo(event: MatCheckboxChange, todo: TodoDto) {
    this.store.dispatch(Actions.modifyTodo({...todo, done: event.checked}));
  }

}
