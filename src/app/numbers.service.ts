import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import random from 'random';

@Injectable()
export class NumberService {
  number$: BehaviorSubject<number> = new BehaviorSubject(100);

  constructor() {
    interval(3000).subscribe(i => {
      this.number$.next(random.int(30, 1000));
    });
  }
}
