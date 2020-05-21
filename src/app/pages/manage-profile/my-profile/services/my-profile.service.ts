import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { configuration } from 'src/assets/config/config';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/shared/models/user-details/user-details.model';
import { LocationDetails } from 'src/app/shared/models/user-details/location-details.model';
@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  private httpOptions: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      }),
    };
  }

  public getUserDetailsById(userId: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${configuration.beeKeeApiUrl}User/getuserdetails?id=${userId}`);
  }

  public updateUserProfile(updatedDetails: UserDetails): Observable<UserDetails> {
    return this.http.post<UserDetails>(`${configuration.beeKeeApiUrl}User/createuser `, updatedDetails);
  }

  public getStateNCityByZipcode(zipcode: number): Observable<LocationDetails> {
    return this.http.get<LocationDetails>(
      `${configuration.beeKeeApiUrl}Utility/geolocationbyzipcode?zipCode=${zipcode}`
    );
  }
}
