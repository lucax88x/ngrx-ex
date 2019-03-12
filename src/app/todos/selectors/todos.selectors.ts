import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from './../models/todos.models';

export const getTodos = createFeatureSelector<Todo[]>('todos');

export const getCompletedTodos = createSelector(
  getTodos,
  (todos): Todo[] => todos.filter(t => t.isCompleted)
);
