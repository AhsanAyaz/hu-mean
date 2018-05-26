import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list = [];
  constructor() { }

  ngOnInit() {
  }

}
