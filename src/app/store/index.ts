import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  testingFeatureKey,
  testingReducer,
  TestingStateI,
} from './testing/testing.reducer';

export interface State {
  [testingFeatureKey]: TestingStateI;
}

export const reducers: ActionReducerMap<State> = {
  [testingFeatureKey]: testingReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
