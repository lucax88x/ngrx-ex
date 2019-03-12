import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/store.models';

import { TodosActions } from '../actions/todos.actions';
import { Todo } from '../models/todos.models';
import { MockStore, provideMockStore } from './../../testing/mock-store';
import { AllFilter, CompleteFilter } from './../actions/todos.actions';
import { TodosEffects } from './todos.effects';

describe('todos effects', () => {
  let sut: TodosEffects;
  let mockStore: MockStore<AppState>;
  let actions$: Observable<TodosActions>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosEffects,
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });

    mockStore = TestBed.get(Store);
    sut = TestBed.get(TodosEffects);
  });

  describe('completedFilterSwitchesToAllWhenNoCompletedTodos', () => {
    it('should map to allFilter when we have no completed todos', () => {
      // given
      mockStore.setState({ todos: [] });

      // when
      actions$ = hot('-a', { a: new CompleteFilter() });

      // then
      const expected$ = cold('-a', { a: new AllFilter() });
      expect(
        sut.completedFilterSwitchesToAllWhenNoCompletedTodos$
      ).toBeObservable(expected$);
    });

    it('should do nothing when we have at least one completed todo', () => {
      // given
      mockStore.setState({ todos: [new Todo('1', 'completed', true)] });

      // when
      actions$ = hot('-a', { a: new CompleteFilter() });

      // then
      const expected$ = cold('-');
      expect(
        sut.completedFilterSwitchesToAllWhenNoCompletedTodos$
      ).toBeObservable(expected$);
    });
  });
});
