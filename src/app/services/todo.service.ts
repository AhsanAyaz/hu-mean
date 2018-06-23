import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<{todo: Todo[]}>(`${environment.apiBaseUrl}/todo`)
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }

  addTodo(todo: Todo) {
    return this.http.post<{todo: Todo}>(`${environment.apiBaseUrl}/todo`, {
      todo: todo
    })
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }
}
