import { ActionReducerMap } from '@ngrx/store';

import { todosReducer } from '../todos/reducers/todos.reducers';
import { AppState } from './store.models';

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer
};
