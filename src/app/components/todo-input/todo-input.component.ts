import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  placholderVal = 'Enter todo text from ts';
  newTodoVal = 'Some text from ts';
  @Output() todoAdded = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    console.log(this.newTodoVal);
    this.todoAdded.emit(this.newTodoVal);
  }

}
