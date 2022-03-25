import { Injectable } from '@angular/core';
import {Observable, Observer, fromEvent, merge, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityObserverService {
  readonly isOnline: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    this.createOnline().subscribe(nextIsOnline => {
      if (this.isOnline.value !== nextIsOnline){
        this.isOnline.next(nextIsOnline);
      }
    });
  }

  /**
   * Creates an observable based on two low-level events (offline and online)
   */
  createOnline(): Observable<boolean> {
    return merge(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })) as Observable<boolean>;
  }
}
