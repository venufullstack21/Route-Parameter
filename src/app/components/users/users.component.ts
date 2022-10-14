import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any
  errorMessage:string='Loading.....';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.userService.getAllUsers().subscribe(res=>{
    this.users = res;
   },(err)=>{
      this.errorMessage='Some internal issues while making API CALL ' + err.code;
   });
  }
}
