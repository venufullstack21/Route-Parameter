import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedin(){
    return true;
  }

  isUserAdmin(){
    return true;
  }
}
