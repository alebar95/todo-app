/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SaveTodoDto } from '../models/save-todo-dto';
import { TodoDto } from '../models/todo-dto';

@Injectable({
  providedIn: 'root',
})
export class TodosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation todosGet
   */
  static readonly TodosGetPath = '/todos';

  /**
   * Returns all todos from the store.
   *
   * Returns all todos from the store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `todosGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TodoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.TodosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }

  /**
   * Returns all todos from the store.
   *
   * Returns all todos from the store
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `todosGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosGet(params?: {
  },
  context?: HttpContext

): Observable<Array<TodoDto>> {

    return this.todosGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TodoDto>>) => r.body as Array<TodoDto>)
    );
  }

  /**
   * Path part for operation addTodo
   */
  static readonly AddTodoPath = '/todos';

  /**
   * Add a new todo to the store.
   *
   * Add a new todo to the store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTodo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTodo$Response(params: {

    /**
     * Create a new todo in the store
     */
    body: SaveTodoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TodoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.AddTodoPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoDto>;
      })
    );
  }

  /**
   * Add a new todo to the store.
   *
   * Add a new todo to the store
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTodo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTodo(params: {

    /**
     * Create a new todo in the store
     */
    body: SaveTodoDto
  },
  context?: HttpContext

): Observable<TodoDto> {

    return this.addTodo$Response(params,context).pipe(
      map((r: StrictHttpResponse<TodoDto>) => r.body as TodoDto)
    );
  }

  /**
   * Path part for operation deleteTodo
   */
  static readonly DeleteTodoPath = '/todos/{id}';

  /**
   * Delete a todo from the store.
   *
   * Delete a todo from the store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTodo()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTodo$Response(params: {

    /**
     * id of the todo to be deleted
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.DeleteTodoPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * Delete a todo from the store.
   *
   * Delete a todo from the store
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTodo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTodo(params: {

    /**
     * id of the todo to be deleted
     */
    id: string;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.deleteTodo$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
