import { counterReducer, initialState } from './counter.reducer';

describe('Counter Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = counterReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
