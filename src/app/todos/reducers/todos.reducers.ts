import * as TodoActions from '../actions/todos.actions';
import { Todo } from '../models/todos.models';

export type Action = TodoActions.TodosActions;

export function todosReducer(
  state: Array<Todo> = [],
  action: Action
): Array<Todo> {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      const newTodosArray = new Array<Todo>({
        id: String(state.length + 1),
        text: action.payload,
        isCompleted: false,
        isVisible: true
      });
      return state.concat(newTodosArray);
    }
    case TodoActions.COMPLETE_TODO: {
      return state.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isCompleted: true });
      });
    }
    case TodoActions.DELETE_TODO: {
      return state.filter(todo => {
        return todo.id !== action.payload.id;
      });
    }
    case TodoActions.UPDATE_TODO: {
      return state.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, {
              isEditabled: false,
              text: action.payload.text
            });
      });
    }
    case TodoActions.EDIT_TODO: {
      return state.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isEditabled: true });
      });
    }
    case TodoActions.ALL_FILTER: {
      return state.map(todo => {
        return Object.assign({}, todo, { isVisible: true });
      });
    }
    case TodoActions.PENDING_FILTER: {
      return state.map(todo => {
        if (!todo.isCompleted) {
          return Object.assign({}, todo, { isVisible: true });
        } else {
          return Object.assign({}, todo, { isVisible: false });
        }
      });
    }
    case TodoActions.COMPLETE_FILTER: {
      return state.map(todo => {
        if (!todo.isCompleted) {
          return Object.assign({}, todo, { isVisible: false });
        } else {
          return Object.assign({}, todo, { isVisible: true });
        }
      });
    }
    default: {
      return state;
    }
  }
}
