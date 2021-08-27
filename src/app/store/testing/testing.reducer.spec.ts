import { testingReducer, initialState } from './testing.reducer';

describe('Testing Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = testingReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
