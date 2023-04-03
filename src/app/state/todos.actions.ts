import { createAction, props } from "@ngrx/store";
import { TodoDto } from "../api/models";

// ACTIONS TYPE NAMES
export const GET_TODOS = '[TodoListComponent] Get Todos';
export const GET_TODOS_SUCCESS = '[TodoListComponent] Get Todos Success';
export const GET_TODOS_FAILED = '[TodoListComponent] Get Todos Failed';
export const ADD_TODO = '[AppComponent] Add Todo';
export const ADD_TODO_SUCCESS = '[AppComponent] Add Todo Success';
export const ADD_TODO_FAILED = '[AppComponent] Add Todo Failed';
export const DELETE_TODO = '[TodoListComponent] Delete Todo';
export const DELETE_TODO_SUCCESS = '[TodoListComponent] Delete Todo Success';
export const DELETE_TODO_FAILED = '[TodoListComponent] Delete Todo Failed';
export const MODIFY_TODO = '[TodoListComponent] Modify Todo';
export const MODIFY_TODO_SUCCESS = '[TodoListComponent] Modify Todo Success';
export const MODIFY_TODO_FAILED = '[TodoListComponent] Modify Todo Failed';


// ACTIONS
export const getTodos = createAction(GET_TODOS);
export const getTodosSuccess = createAction(GET_TODOS_SUCCESS, props<{todos:ReadonlyArray<TodoDto>}>());
export const getTodosFailed = createAction(GET_TODOS_FAILED, props<{errMsg: string}>());

export const addTodo = createAction(ADD_TODO, props<{title: string; done: boolean}>());
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS);
export const addTodoFailed = createAction(ADD_TODO_FAILED, props<{errMsg: string}>());

export const deleteTodo = createAction(DELETE_TODO, props<{id: number}>());
export const deleteTodoSuccess = createAction(DELETE_TODO_SUCCESS);
export const deleteTodoFailed = createAction(DELETE_TODO_FAILED, props<{errMsg: string}>());

export const modifyTodo = createAction(MODIFY_TODO, props<TodoDto>());
export const modifyTodoSuccess = createAction(MODIFY_TODO_SUCCESS);
export const modifyTodoFailed = createAction(MODIFY_TODO_FAILED, props<{errMsg: string}>());


