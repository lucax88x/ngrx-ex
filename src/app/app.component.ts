import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store/store.models';
import * as TodoActions from './todos/actions/todos.actions';
import { Todo } from './todos/models/todos.models';
import { getCompletedTodos, getTodos } from './todos/selectors/todos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Observable<Todo[]>;
  completedTodos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos = this.store.select(getTodos);
    this.completedTodos = this.store.select(getCompletedTodos);
  }

  onAddTodo(newTodo) {
    this.store.dispatch(new TodoActions.AddTodo(newTodo.text));
  }

  onCompletedTodo(todo) {
    this.store.dispatch(new TodoActions.CompleteTodo(todo));
  }

  onDeletedTodo(todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
  }

  onUpdateTodo(todo) {
    this.store.dispatch(new TodoActions.UpdateTodo(todo));
  }
  onEditTodo(todo) {
    this.store.dispatch(new TodoActions.EditTodo(todo));
  }

  onFilterAll() {
    this.store.dispatch(new TodoActions.AllFilter());
  }

  onFilterPending() {
    this.store.dispatch(new TodoActions.PendingFilter());
  }

  onFilterComplete() {
    this.store.dispatch(new TodoActions.CompleteFilter());
  }
}
