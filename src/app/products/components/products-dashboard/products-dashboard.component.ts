import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  userMessage:any;

  constructor(private notificationService:NotificationService) { 
  }

  ngOnInit(): void {
    console.log('products dashboard')
    this.notificationService.NotficationSubject.subscribe(d =>{
      this.userMessage = d;
    });
  }
}
