import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { Todo } from '../../models/todos.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo>;
  @Output() completedTodo: EventEmitter<Todo>;
  @Output() deletedTodo: EventEmitter<Todo>;
  @Output() editTodo: EventEmitter<Todo>;
  @Output() updateTodo: EventEmitter<Todo>;

  constructor() {
    this.completedTodo = new EventEmitter<Todo>();
    this.deletedTodo = new EventEmitter<Todo>();
    this.editTodo = new EventEmitter<Todo>();
    this.updateTodo = new EventEmitter<Todo>();
  }

  ngOnInit() {}

  onCompletedTodo(todo) {
    this.completedTodo.emit(todo);
  }

  onDeletedTodo(todo) {
    this.deletedTodo.emit(todo);
  }

  onEditTodo(todo) {
    this.editTodo.emit(todo);
  }

  onUpdateTodo(todo) {
    this.updateTodo.emit(todo);
  }
}
