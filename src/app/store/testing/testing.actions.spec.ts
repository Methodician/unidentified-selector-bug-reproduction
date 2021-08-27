import * as fromTesting from './testing.actions';

describe('loadTestings', () => {
  it('should return an action', () => {
    expect(fromTesting.loadTestings().type).toBe('[Testing] Load Testings');
  });
});
