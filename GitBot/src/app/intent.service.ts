import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Intent } from './homepage/intent.object';


@Injectable({
  providedIn: 'root'

})



export class IntentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token cfbf33d7b0ee5276d3db4d71af75599f'
    })
  };

  intentUrl = 'https://api.cai.tools.sap/v2/request';


  constructor(private httpClient: HttpClient) { }


  getIntent(intent: Intent) {
    return this.httpClient.post(this.intentUrl, intent, this.httpOptions);
  }

}
