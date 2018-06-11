import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginResp } from '../../models/login-resp';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('todo-app_token');
  }

  login(credentials) {
    return this.http.post<LoginResp>('http://localhost:3000/user/login', {
      user: credentials
    })
    .pipe(
      tap((response) => {
        this.token = response.user.token;
        localStorage.setItem('todo-app_token', this.token);
      })
    );
  }

  logout() {
    this.token = '';
    localStorage.removeItem('todo-app_token');
  }
}
