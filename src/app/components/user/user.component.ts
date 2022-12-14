import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId:any;
  userData:any;
  errorMessage:string='Loading.....';

  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUser(this.userId).subscribe(user=>{
      this.userData=user;
      console.log('User',user);
    },(err)=>{
      this.errorMessage='Some Internal Issues while making API Call ' + err.code;
    })
  }

}
