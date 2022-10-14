import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../components/add-user/add-user.component';

export interface CanComponentLeave{
  canLeave:()=>boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component:CanComponentLeave) {
    if(component.canLeave){
      return component.canLeave();
    }
    return true;
  }
}
