import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom, filter } from 'rxjs/operators';
import { AppState } from 'src/app/store/store.models';

import { AllFilter, COMPLETE_FILTER } from '../actions/todos.actions';
import { getCompletedTodos } from '../selectors/todos.selectors';

@Injectable()
export class TodosEffects {
  @Effect()
  completedFilterSwitchesToAllWhenNoCompletedTodos$ = this.actions$.pipe(
    ofType(COMPLETE_FILTER),
    withLatestFrom(this.store.select(getCompletedTodos), (_, todos) => todos),
    filter(todos => !todos.length),
    map(() => new AllFilter())
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
