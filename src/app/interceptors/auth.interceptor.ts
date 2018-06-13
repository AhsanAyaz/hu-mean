import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.token;
    const protectedUrls = [
      '/todo',
      '/user'
    ];

    const isProtectedUrl = protectedUrls.find((protectedUrl) => {
      return req.url.includes(protectedUrl);
    });

    if (authToken && isProtectedUrl) {
      req = req.clone({
        setHeaders: {
          'x-access-token': authToken
        }
      });
      return next.handle(req)
        .pipe(
          tap((event: HttpEvent<any>) => {
            this.onSuccess(event);
          }, (err: any) => {
            this.onError(err);
          })
        );
    } else {
      return next.handle(req)
        .pipe(
          tap((event: HttpEvent<any>) => {
            this.onSuccess(event);
          }, (err: any) => {
            this.onError(err);
          })
        );
    }
  }

  onSuccess(event) {
    if (event instanceof HttpResponse) {
      // do stuff with response if you want
      console.log('success');
      console.log(event);
    }
  }

  onError(err: any) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401 || err.status === 403) {
        // redirect to the login route
        // or show a modal
        console.log('401 found');
        alert('Your session is expired. Or you don\'t have the access');
        this.router.navigate(['/login']);
        console.log(err);
      }
    }
  }
}
