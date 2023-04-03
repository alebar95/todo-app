import { TodoDto } from "../api/models";

export interface TodosState {
  todos: ReadonlyArray<TodoDto>;
  loading: boolean;
}

