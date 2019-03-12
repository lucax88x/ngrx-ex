import { Action } from '@ngrx/store';

import { Todo } from '../models/todos.models';

export const ADD_TODO = '[todo] ADD_TODO';
export const UPDATE_TODO = '[todo] UPDATE_TODO';
export const DELETE_TODO = '[todo] DELETE_TODO';
export const COMPLETE_TODO = '[todo] COMPLETE_TODO';
export const EDIT_TODO = '[todo] EDIT_TODO';

export const COMPLETE_FILTER = '[filter] COMPLETE';
export const PENDING_FILTER = '[filter] PENDING';
export const DELETED_FILTER = '[filter] DELETED';
export const ALL_FILTER = '[filter] ALL';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: string) {}
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: Todo) {}
}

export class CompleteTodo implements Action {
  readonly type = COMPLETE_TODO;

  constructor(public payload: Todo) {}
}

export class EditTodo implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: Todo) {}
}

export class CompleteFilter implements Action {
  readonly type = COMPLETE_FILTER;
}

export class PendingFilter implements Action {
  readonly type = PENDING_FILTER;
}

export class DeletedFilter implements Action {
  readonly type = DELETED_FILTER;
}

export class AllFilter implements Action {
  readonly type = ALL_FILTER;
}

export type TodosActions =
  | AddTodo
  | UpdateTodo
  | DeleteTodo
  | CompleteTodo
  | EditTodo
  | CompleteFilter
  | PendingFilter
  | DeletedFilter
  | AllFilter;
