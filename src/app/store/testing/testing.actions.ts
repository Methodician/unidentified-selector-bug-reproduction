import { createAction, props } from '@ngrx/store';

export const loadTestings = createAction(
  '[Testing] Load Testings'
);

export const loadTestingsSuccess = createAction(
  '[Testing] Load Testings Success',
  props<{ data: any }>()
);

export const loadTestingsFailure = createAction(
  '[Testing] Load Testings Failure',
  props<{ error: any }>()
);
