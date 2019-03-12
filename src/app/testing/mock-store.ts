/// to be removed when it's available.
/// https://github.com/ngrx/platform/pull/1027
import { Inject, Injectable } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionsSubject,
  INITIAL_STATE,
  ReducerManager,
  ScannedActionsSubject,
  StateObservable,
  Store
} from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MockState extends BehaviorSubject<any> {
  constructor() {
    super({});
  }
}

@Injectable()
export class MockReducerManager extends BehaviorSubject<
  ActionReducer<any, any>
> {
  constructor() {
    super(() => undefined);
  }
}

@Injectable()
export class MockStore<T> extends Store<T> {
  private state$ = new BehaviorSubject<T>(this.initialState as T);

  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager,
    public scannedActions$: ScannedActionsSubject,
    @Inject(INITIAL_STATE) private initialState: any
  ) {
    super(state$, actionsObserver, reducerManager);

    this.source = this.state$.asObservable();
  }

  setState(state: T): void {
    this.state$.next(state);
  }

  dispatch<V extends Action = Action>(action: V) {
    super.dispatch(action);
    this.scannedActions$.next(action);
  }

  addReducer() {
    // noop
  }

  removeReducer() {
    // noop
  }
}

export function provideMockStore<T = any>(config: { initialState?: T } = {}) {
  return [
    { provide: INITIAL_STATE, useValue: config.initialState },
    ActionsSubject,
    ScannedActionsSubject,
    { provide: StateObservable, useClass: MockState },
    { provide: ReducerManager, useClass: MockReducerManager },
    {
      provide: Store,
      useClass: MockStore
    }
  ];
}

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };
