import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

export const selectAppState = createFeatureSelector<TodosState>('state');

export const todosSelector = createSelector(
  selectAppState,
  (state: TodosState) => state.todos
);
export const loadingSelector = createSelector(
  selectAppState,
  (state: TodosState) => state.loading
);
