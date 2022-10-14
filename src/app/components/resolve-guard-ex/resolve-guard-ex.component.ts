import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-guard-ex',
  templateUrl: './resolve-guard-ex.component.html',
  styleUrls: ['./resolve-guard-ex.component.scss']
})
export class ResolveGuardExComponent implements OnInit {
  users:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('xxx',this.route)
    this.users = this.route.snapshot.data['data'];
    console.log(this.users)
  }
}
