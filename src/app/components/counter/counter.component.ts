import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Observable } from 'rxjs';
import { CounterActions } from '../../features/counter/actions/counter.actions';
import { CounterState } from '../../features/counter/reducers/counter.reducer';
import { selectCount } from '../../features/counter/selectors/counter.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  imports: [ButtonModule, CardModule, CommonModule]
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {
    // Select count value from store (using selector or directly)
    this.count$ = this.store.select(selectCount); // if you created a selector
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  // 
  // count = 0;

  // increment(): void {
  //   this.count++;
  // }

  // decrement(): void {
  //   this.count--;
  // }
}
