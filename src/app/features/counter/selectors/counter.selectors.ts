import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);
