import { Injectable } from '@angular/core';
// importing the service to make http calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=50&seed=hu');
  }

  sayHello() {
    console.log('hello world');
  }
}
