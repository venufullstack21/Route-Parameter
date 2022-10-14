import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-observable-ex',
  templateUrl: './observable-ex.component.html',
  styleUrls: ['./observable-ex.component.scss']
})
export class ObservableExComponent implements OnInit, OnDestroy {

  private mySubscription: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
    // Promise
    const promise = new Promise(resolve => {
      console.log('Promise call...')
      setTimeout(()=>{
        resolve('Promise working');
        resolve('Promise working1');
        resolve('Promise working2');
      }, 1000)
    });

    promise.then(result => console.log(result))

    // Observable Syntax
    // const observable = new Observable(sub =>{
    //   console.log('Observable call...')
    //   setTimeout(() => {
    //     sub.next('Observable working');
    //     sub.next('Observable working1');
    //     sub.next('Observable working2');
    //   }, 1000);
    // })

    // Subscribing observable
    // observable.subscribe(result => console.log(result))

    // Applying filter operator on observable
    // observable.pipe(
    //   filter(d => d === 'Observable working1')
    // )
    // .subscribe(result => console.log('',result))


    // Unsubscribing observable example
    const observable = new Observable(sub =>{
      console.log('Observable call...')
      let counter = 0;
      setInterval(() => {
          counter = counter +1;
          sub.next(counter);
      }, 1000);
    })

    this.mySubscription = observable.subscribe(result => console.log('Subscriber count '+ result))
    
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

  // Promises execute immediately on creation, promises are eager
  // Observables are lazy

  // Promise will return/emit single value
  // Observables will return/emits one or more values over a period of time, it's streaming of data

  // Promises don't have operators
  // Operators can be used in observables such as filter, map, reduce, retry, etc.

  // Promises can't be cancelled
  // Observable can be cancelled/unsubscribed
}
