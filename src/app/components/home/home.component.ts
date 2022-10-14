import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText:any;
  userMessage:any;

  topics:any[]=['Services',
  'Routeroutlet',
  'Routing',
  'Default Path/Routing',
  'Handling Invalid Path/Routing',
  'Routing Parameters',
  'Nested Routes',
  'Named Routeroutlet',
  'CanActivate Route Guard(checking route access)',
  'CanActivateChild Route Guard(checking child route access)',
  'CanDeactivate Route Guard(ask permission to discard unsaved changes)',
  'Resolve Route Guard(pre-fetching route data)',
  'Featured Module/s',
  'Lazy loading',
  'Promises vs Observables',
  'Subject - RXJS (Emits only upon subscribing and next) - Example need to be created',
  'Behaviour Subject - RXJS (Holds initial value and emits without subscribing also) - Example need to be created',
  'Subject/Behaviour Subject with Service Example',
  'Replay Subject - RXJS (It can hold old values to the new subscriber, we can also define no of old values to be hold using buffervalue parameter) - Example need to be created',
  'Async Subject - RXJS - Example need to be created']
  
  testData=[
    {
    'id':101,
    'name':'Venu'
    },
    {
    'id':102,
    'name':'Karunakar'
    },
    {
      'id':103,
      'name':'Hemanth'
      },
      {
        'id':104,
        'name':'Gopal'
        },
  ]

  constructor(private NotificationService:NotificationService) { }

  ngOnInit(): void {
    this.NotificationService.NotficationSubject.subscribe(d =>{
      this.userMessage = d;
    });
  }
}
