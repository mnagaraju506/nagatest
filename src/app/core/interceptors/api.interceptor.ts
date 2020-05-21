import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/login/authentication.service';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type') && !request.headers.has('fileUpload')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        if ([401, 403].indexOf(error.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          // this.authenticationService.logout();
          // this.alertService.error('You are not authorized to access this activity');
          return;
          // this.authenticationService.logout();
        }

        // Below lines reused to see the error Status code & Message in Console Log
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status,
        };

        const error1 = error.error.message || error.statusText;
        return throwError(error1);
        // console.log(data);
        // return throwError(errorMessage);
      })
    );
  }
}
