import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {BehaviorSubject, timer} from 'rxjs';
import {MINUTE, SECOND} from '../../types/TimeSpan';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {
  readonly updateAvailable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // <- initial value

  timerSource = timer(5 * SECOND, 15 * MINUTE);

  constructor(private updates: SwUpdate) {
    if (updates.isEnabled){
      updates.versionUpdates.subscribe(() => this.updateAvailable.next(true));
      this.initializeUpdateChecking();
    }
  }

  public initializeUpdateChecking(): void{
    this.timerSource.subscribe(() => {
      console.log('Check for updates');
      this.updates.checkForUpdate().then(() => console.log('Check for updates succeeded'));
    });
  }

  public updateApplication(): void{
    this.updates.activateUpdate()
      .then(() => this.updateAvailable.next(false))
      .then(() => document.location.reload());
  }

  public forceSetUpdateAvailable(updateAvailable: boolean): void{
    this.updateAvailable.next(updateAvailable);
  }
}
