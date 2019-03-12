import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../environments/environment';

export const actionsBlacklist = [
  '@ngrx/effects/init',
  '@ngrx/store/update-reducers',
  '@ngrx/store-devtools/recompute'
];

const withLogger = true;

export function logger(reducer: ActionReducer<{}>): ActionReducer<any, any> {
  return storeLogger({
    collapsed: true,
    filter: {
      blacklist: actionsBlacklist
    }
  })(reducer);
}

const reducers = [];
if (!environment.production) {
  reducers.push(storeFreeze);
  if (withLogger) {
    reducers.push(logger);
  }
}

export const metaReducers = reducers;
