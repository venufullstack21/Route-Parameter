import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notificationdashboard',
  templateUrl: './notificationdashboard.component.html',
  styleUrls: ['./notificationdashboard.component.scss']
})
export class NotificationdashboardComponent implements OnInit {
  userMessage:any;
  constructor(private NotificationS:NotificationService) { }

  ngOnInit(): void {
    this.NotificationS.NotficationSubject.subscribe(d=>{
        this.userMessage = d;
    })
  }

}
