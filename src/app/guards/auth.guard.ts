import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService){

  }
  
  canActivate() {
    if(this.authservice.isUserLoggedin()){
      return true;
    }else{
      window.alert('Permission denied for this page!')
      return false;
    }
  }
}
