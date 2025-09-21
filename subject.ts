//subject;
import { Subject } from 'rxjs';

const subject = new Subject();
subject.subscribe(val=>console.log("sub1",val));
subject.next(1);
subject.subscribe(val=>console.log("sub2", val));
subject.next(2);
subject.next(3);


//Behaviour Subject
import { BehaviorSubject  } from 'rxjs';

const behaviourSubject = new BehaviorSubject (0);
behaviourSubject.subscribe(val=>console.log("sub1",val));
behaviourSubject.next(1);
behaviourSubject.next(2);
behaviourSubject.next(3);
behaviourSubject.subscribe(val=>console.log("sub2", val));

//Reply Subject
import { ReplaySubject   } from 'rxjs';

const replaySubject = new ReplaySubject(0);
replaySubject.subscribe(val=>console.log("sub1",val));
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(val=>console.log("sub2", val));