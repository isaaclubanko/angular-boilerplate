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
export class WiseService {

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

  getallAccounts(currency: string): Observable<any> {
    return this.http.get(
      `https://api.sandbox.transferwise.tech/v1/accounts/?currency=${currency}`,
      {
        headers: {
          'Authorization': this.credentialsService.getBearerToken()
        }
      }
    )
  }

  getQuote(
    sourceCurrency: any,
    targetCurrency: any,
    sourceAmont: any,
    profile: any

  ): Observable<any>  {
    const data = {
      "sourceCurrency": sourceCurrency,
      "targetCurrency": targetCurrency,
      "sourceAmount": sourceAmont,
      "targetAmount": null,
      "profile": profile
    }
    const headers = {
      "Authorization": this.credentialsService.getBearerToken()
    }

    return this.http.post(
      'https://api.sandbox.transferwise.tech/v2/quotes', data, {headers}
    )
  }

  getAccountRequirements(
    quoteID: any
  ): Observable<any>  {
    return this.http.get(
      `https://api.sandbox.transferwise.tech/v1/quotes/${quoteID}/account-requirements`,
      {
        headers: {
          'Authorization': this.credentialsService.getBearerToken()
        }
      }
    )
  }

  constructor(
    private http: HttpClient,
    private profileAdapter: ProfileAdapter,
    private credentialsService: CredentialsService
  ) {

  }
}

// interface account: 