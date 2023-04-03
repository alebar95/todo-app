import { createReducer, on } from "@ngrx/store";
import { TodosState } from "./todos.state";
import * as Actions from "./todos.actions";

const initialState: TodosState = {
  todos: [],
  loading: false
}

export const todosReducer = createReducer(initialState,
  on(Actions.getTodos, (state) => {return {...state, loading: true}}),
  on(Actions.getTodosSuccess, (state, props) => {return {...state, todos: [...props.todos], loading: false}}),
  on(Actions.getTodosFailed, (state) => {return {...state, loading: false, todos: []}}),
  on(Actions.addTodo, (state) => {return {...state, loading: true}}),
  on(Actions.addTodoFailed, (state) => {return {...state, loading: false}}),
  on(Actions.deleteTodo, (state) => {return {...state, loading: true}}),
  on(Actions.deleteTodoFailed, (state) => {return {...state, loading: false}}),
  on(Actions.modifyTodo, (state) => {return {...state, loading: true}}),
  on(Actions.modifyTodoSuccess, (state) => {return {...state, loading: false}}),
  on(Actions.modifyTodoFailed, (state) => {return {...state, loading: false}} )
  );

