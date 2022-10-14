import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userMessage:any;

  constructor(private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.notificationService.NotficationSubject.subscribe(d =>{
      this.userMessage=d;
    })
  }

  sendMessage(message:any){
    alert(message.value)
    this.notificationService.sendNotification(message.value);
  }
}
