import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // public NotficationSubject = new Subject<string>;
  public NotficationSubject = new BehaviorSubject('Greetings....')

  constructor() { }

  sendNotification(data:any){
    this.NotficationSubject.next(data);
  }
}
