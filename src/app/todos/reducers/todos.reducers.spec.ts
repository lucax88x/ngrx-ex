import { DeleteTodo } from '../actions/todos.actions';
import { Todo } from '../models/todos.models';
import { todosReducer } from './todos.reducers';

describe('TodosReducers', () => {
  describe('DeleteTodo', () => {
    it('should not break when removing not present todo', () => {
      // given
      const toRemoveTodo = new Todo('1', 'to-remove');
      const anotherTodo = new Todo('2', 'to-keep');

      // when
      const result = todosReducer(
        [anotherTodo],
        new DeleteTodo(new Todo('1', 'to-remove'))
      );

      // then
      expect(result).toEqual([anotherTodo]);
    });

    it('should remove todo', () => {
      // given
      const toRemoveTodo = new Todo('1', 'to-remove');
      const anotherTodo = new Todo('2', 'to-keep');

      // when
      const result = todosReducer(
        [anotherTodo, toRemoveTodo],
        new DeleteTodo(toRemoveTodo)
      );

      // then
      expect(result).toEqual([anotherTodo]);
    });
  });
});
