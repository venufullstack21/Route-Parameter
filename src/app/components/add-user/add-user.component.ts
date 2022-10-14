import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { CanComponentLeave } from 'src/app/guards/un-saved-changes.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, CanComponentLeave {
  userName:FormControl= new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  canLeave(): boolean{
    if(this.userName.dirty){
      return window.confirm('You have some unsaved changes. Save it before leaving!')
    }
    return true;
  };

}
