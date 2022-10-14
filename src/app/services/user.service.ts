import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
}
