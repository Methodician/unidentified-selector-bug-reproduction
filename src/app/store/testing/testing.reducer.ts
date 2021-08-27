import { Action, createReducer, on } from '@ngrx/store';

export const testingFeatureKey = 'testing';

export interface TestingStateI {
  something: any[];
  otherThing: any;
}

export const initialState: TestingStateI = {
  something: [],
  otherThing: null,
};

export const testingReducer = createReducer(initialState);
