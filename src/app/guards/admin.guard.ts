import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private authService:AuthService){

  }
  canActivateChild(){
    if(this.authService.isUserAdmin()){
      return true;
    }else{
      window.alert('Permission denied for this page!')
      return false;
    }
  }
}
