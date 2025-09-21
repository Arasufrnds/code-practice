1// map is a transformation operator based on the condition it emits new observables.
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1,2,3).pipe(map(x=> x*2)).subscribe(console.log);


2//filter allow only those values that pass a specified condition
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

of(1,2,3,4,5,6).pipe(filter(x=> x % 2 === 0)).subscribe(val=>console.log(val));


3//Immediate switch to the new observables for the previous one completes
import { of } from 'rxjs';
import { switchMap, delay  } from 'rxjs/operators';

of(1,2,3,4,5,6).pipe(switchMap(()=>of('New Value').pipe(delay(1000)))).subscribe(console.log);


4//concatMap wait previous observable needs to complete before creates new one
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

of(1, 2, 3).pipe(
  concatMap(x => of(x * 10).pipe(delay(1000)))
).subscribe(console.log); 
// Outputs 10, then 20, then 30 in sequence with 1-second delay each

5//Ignores the new observable values till previous one needs to complete.
import { fromEvent, of } from 'rxjs';
import { exhaustMap, delay } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');

clicks.pipe(
  exhaustMap(() => of('Processing...').pipe(delay(2000)))
).subscribe(console.log);



6//distinctUntilChanged which will remove the duplicate values of observables that wmits
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

of(1, 1, 2, 2, 3).pipe(distinctUntilChanged()).subscribe(console.log);// Output: 1, 2, 3

7//Emits only unique values (ever seen).
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

of(1, 2, 2, 3, 1).pipe(
  distinct()
).subscribe(console.log); // Output: 1, 2, 3



8//first operator that can takes first value only that can be emited from observables
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

of(1, 1, 2, 2, 3).pipe(first()).subscribe(console.log); // Output: 1

9//take() which will take the given arguments value length from the observables
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

of(1, 1, 2, 2, 3).pipe(take(1)).subscribe(console.log); // Output: 1, 2, 3

10//Combine latest values from multiple observables.
//Always combine with latest value of birst observable react with second observable values
// in case obs1(2,1) => then output is (1A, 1B)
import { combineLatest, of } from 'rxjs';
const obs1 = of(1, 2);
const obs2 = of('A', 'B');

combineLatest([obs1, obs2]).subscribe(console.log); //output 2A,2B


11//It combines the latest value from another observable whenever the source observable emits.
//It does not emit when the "other" observable emits — only when the source emits.
import { interval, of } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

const source = interval(1000);
const other = of('Hello');

source.pipe(
  withLatestFrom(other)
).subscribe(([srcVal, otherVal]) => {
  console.log(srcVal, otherVal);
});


12//startwith Emit initial value before the source observable.
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

of(2, 3).pipe(startWith(1)).subscribe(console.log); // Output: 1, 2, 3

13//tap operator which is used to handle the side effects which can emits from the observables,without modify the values
import { tap, of, map } from 'rxjs';

of(1,2,3,4,5).pipe(
  tap(val=>console.log("before", val)),
  map(val=>val*10),
  tap(val=>console.log("after", val)),
).subscribe();

14//forkjoin wait multiple observales to complete and takes the final emit values and finally join and give an single array

import { forkJoin,of } from 'rxjs';

const ob1 = of(1,2,3,4);
const ob2 = of('Hello');

forkJoin([ob1,ob2]).subscribe(([val1,val2])=>{
  console.log(val1);
  console.log(val2);
});

15//pairwise Emits the previous and current values as pairs.
import { of } from 'rxjs';
import { pairwise } from 'rxjs/operators';

of(1, 2, 3, 4).pipe(
  pairwise()
).subscribe(console.log);
// Output: [1,2], [2,3], [3,4]

16//Delays emissions of obsevables by specified time.
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

of('Delayed').pipe(
  delay(1000)
).subscribe(console.log); // Prints after 1 second

17//Collect emitted values over a time period and emit them as an array.
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

interval(500).pipe(
  bufferTime(2000)
).subscribe(console.log); // Emits arrays of values every 2 seconds

18//throttle-time Emit first value, then ignore new values for specified duration.
import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

interval(500).pipe(
  throttleTime(2000)
).subscribe(console.log);
// Emits value every 2 seconds, ignoring intermediate values


19//Recursively map each emitted value to an observable and merge results.
import { of } from 'rxjs';
import { expand, take } from 'rxjs/operators';

of(1).pipe(
  expand(x => of(x + 1)),
  take(5)
).subscribe(console.log);
// Output: 1, 2, 3, 4, 5


