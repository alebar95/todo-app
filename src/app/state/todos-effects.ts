import { Injectable, inject } from '@angular/core';
import { TodosService } from '../api/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ACTIONS from 'src/app/state/todos.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { TodoDto } from '../api/models';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.GET_TODOS),
      exhaustMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => ACTIONS.getTodosSuccess({ todos })),
          catchError((err) =>
            of(
              ACTIONS.getTodosFailed({
                errMsg: `Get todo failed: ${err.message}`,
              })
            )
          )
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.ADD_TODO),
      exhaustMap((props) =>
        this.todosService.addTodo({ body: props }).pipe(
          map((_) => ACTIONS.getTodos()),
          catchError((err) =>
            of(
              ACTIONS.addTodoFailed({
                errMsg: `Add todo failed: ${err.message}`,
              })
            )
          )
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.DELETE_TODO),
      exhaustMap((props: { id: string }) =>
        this.todosService.deleteTodo({ id: props.id }).pipe(
          map((_) => ACTIONS.getTodos()),
          catchError((err) =>
            of(
              ACTIONS.addTodoFailed({
                errMsg: `Delete todo failed: ${err.message}`,
              })
            )
          )
        )
      )
    )
  );

  modifyTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.MODIFY_TODO),
      exhaustMap((props: TodoDto) =>
        this.todosService
          .modifyTodo({
            id: props.id!,
            body: { title: props.title, done: props.done },
          })
          .pipe(
            map((_) => ACTIONS.getTodos()),
            catchError((err) =>
              of(
                ACTIONS.addTodoFailed({
                  errMsg: `Modify todo failed: ${err.message}`,
                })
              )
            )
          )
      )
    )
  );

  displayErrorAlert = createEffect(
    () => {
      return inject(Actions).pipe(
        ofType(ACTIONS.ADD_TODO_FAILED, ACTIONS.GET_TODOS_FAILED),
        tap((err: { errMsg: string }) => alert(err.errMsg))
      );
    },
    { functional: true, dispatch: false }
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
