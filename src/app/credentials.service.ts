import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


import  json_data  from './credentials.json';


// This is a terrible anti-pattern, but is the bare minimum to prevent test credentials from being committed to github
// add a credentials.json file to the app directory. Format: {'auth_token': 'Bearer <token>'}
// wanted to use an http client wrapped in a try catch to get the json data but ended up in async hell. 

@Injectable({
  providedIn: 'root'
})
export class CredentialsService{
  json_data: any = [];
  constructor(
  ) { }

  getBearerToken(): string {
    return json_data.auth_token
  }
}
