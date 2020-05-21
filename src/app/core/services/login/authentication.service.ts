import { configuration } from '../../../../assets/config/config';
import { AuthToken } from '../../../shared/models/authenticate/auth.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { StorageKeys } from 'src/app/shared/enums';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public user: AuthToken;
  private httpOptions: any;
  private helperService = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router, private storageService: StorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      }),
    };
  }

  public login(username: string, pwd: string) {
    return this.http
      .post<AuthToken>(
        `${configuration.beeKeeApiUrl}Auth/login`,
        { userName: username, password: pwd },
        this.httpOptions
      )
      .pipe(catchError(this.handleError<AuthToken>('')));
  }
  public async checkUserLogIn(): Promise<boolean> {
    if ((await this.storageService.isExists(StorageKeys.AuthToken)) && !this.isTokenExpired()) {
      return true;
    } else {
      return false;
    }
  }
  private isTokenExpired(): boolean {
    return this.helperService.isTokenExpired(this.user.auth_token);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.router.navigate(['/login']);
      // console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
