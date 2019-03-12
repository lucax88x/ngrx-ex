import { Todo } from '../models/todos.models';
import { getCompletedTodos } from './todos.selectors';

describe('TodosSelectors', () => {
  it('should return empty array without todos', () => {
    // when
    const result = getCompletedTodos({ todos: [] });

    // then
    expect(result).toEqual([]);
  });

  it('should return empty array as no todo is completed', () => {
    // given
    const notCompletedTodo = new Todo('1', 'not-completed');
    const anotherTodo = new Todo('2', 'another');

    // when
    const result = getCompletedTodos({
      todos: [notCompletedTodo, anotherTodo]
    });

    // then
    expect(result).toEqual([]);
  });

  it('should return empty array as no todo is completed', () => {
    // given
    const notCompletedTodo = new Todo('1', 'not-completed');
    const completedTodo = new Todo('2', 'completed', true);
    const anotherTodo = new Todo('3', 'another');

    // when
    const result = getCompletedTodos({
      todos: [notCompletedTodo, completedTodo, anotherTodo]
    });

    // then
    expect(result).toEqual([completedTodo]);
  });
});
