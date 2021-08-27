import { createFeatureSelector, createSelector } from '@ngrx/store';
import { testingFeatureKey, TestingStateI } from './testing.reducer';

export const testingState =
  createFeatureSelector<TestingStateI>(testingFeatureKey);

export const selectSomething = createSelector(
  testingState,
  ({ something }) => something
);
