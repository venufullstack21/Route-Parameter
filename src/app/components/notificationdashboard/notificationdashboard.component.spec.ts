import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationdashboardComponent } from './notificationdashboard.component';

describe('NotificationdashboardComponent', () => {
  let component: NotificationdashboardComponent;
  let fixture: ComponentFixture<NotificationdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
