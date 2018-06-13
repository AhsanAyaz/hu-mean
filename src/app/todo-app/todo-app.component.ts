import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'ta-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  title = 'Todo App';
  todoList = [{
    text: 'Go shopping',
    done: false
  }, {
    text: 'Write code',
    done: false
  }, {
    text: 'Review submissions',
    done: false
  }];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((todos) => {
        console.log(todos);
      });
  }

  addNewTodo(newTodoText) {
    const newTodo = {
      text: newTodoText,
      done: false
    };
    this.todoList.push(newTodo);
  }

}
