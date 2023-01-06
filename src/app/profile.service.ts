import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

import accountData from './bank-profiles/dummy_data.json';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProfileAdapter } from './profile';
import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  bearer_token: string = ""

  getallProfiles(): Observable<Profile[]> {
    
    return this.http.get(
      'https://api.sandbox.transferwise.tech/v2/profiles',
      {
        headers: {
          'Authorization': this.credentialsService.getBearerToken()
        }
      }
    ).pipe(
      map((data: any) => data.map(
        (item: any) => this.profileAdapter.adapt(item)
      ))
    );
  }

  // getProfiles(): void {
  //   this.profiles = this.getallProfiles()
  //   // console.log(api_resp)
  //   const o_profiles = of(this.profiles);
  //   return o_profiles;
  // }

  constructor(
    private http: HttpClient,
    private profileAdapter: ProfileAdapter,
    private credentialsService: CredentialsService
  ) {

  }
}
