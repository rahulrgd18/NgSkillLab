import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CounterActions } from '../actions/counter.actions';


@Injectable()
export class CounterEffects {

  counterCounters$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CounterActions.counterCounters),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CounterActions.counterCountersSuccess({ data })),
          catchError(error => of(CounterActions.counterCountersFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
