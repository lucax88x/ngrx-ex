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
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() compeletedTodo: EventEmitter<Todo>;
  @Output() deletedTodo: EventEmitter<Todo>;
  @Output() editTodo: EventEmitter<Todo>;
  @Output() updateTodo: EventEmitter<Todo>;

  constructor() {
    this.compeletedTodo = new EventEmitter<Todo>();
    this.deletedTodo = new EventEmitter<Todo>();
    this.editTodo = new EventEmitter<Todo>();
    this.updateTodo = new EventEmitter<Todo>();
  }

  ngOnInit() {}

  onCompletedTodo(todo) {
    this.compeletedTodo.emit(todo);
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
