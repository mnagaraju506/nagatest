import { ContactUsRequest } from '../../../shared/models/pre-login/contact-us-request.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { configuration } from 'src/assets/config/config';
import { Router } from '@angular/router';
import { ApiMethods } from 'src/assets/config/api-methods-config';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BecomeBeekeeProService {
  // tslint:disable-next-line: no-any
  public httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      }),
    };
  }
  public saveContactUs(contactUsRequest: ContactUsRequest) {
    return this.http
      .post<StatusResponse>(
        `${configuration.beeKeeApiUrl}${ApiMethods.saveContactUsUrl}`,
        JSON.stringify(contactUsRequest),
        this.httpOptions
      )
      .pipe(catchError(this.handleError<StatusResponse>('')));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

export class StatusResponse {
  public requestStatus: string;
  public data: any;
}
