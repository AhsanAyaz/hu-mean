import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<{todo: Todo[]}>('http://localhost:3000/todo')
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }

  addTodo(todo: Todo) {
    return this.http.post<{todo: Todo}>('http://localhost:3000/todo', {
      todo: todo
    })
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }
}
