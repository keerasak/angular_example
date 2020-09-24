import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  // private air: Airtable.Base;

  constructor(private http:HttpClient) {

  //   this.air = new Airtable({
  //     apiKey: 'keyIT3pgtnvefrTMg'
  //   }).base('appMhWZC8mZcUYvkq');

  }


  public async add(s: string) {

    const data = {
      "records": [
        {
          "fields": {"Text": "test"}
        },
        {
          "fields": {}
        }
      ]
    }

    const url = 'https://api.airtable.com/v0/appMhWZC8mZcUYvkq/Table%201';


    const options = {
      headers: {
        "Authorization": "Bearer keyIT3pgtnvefrTMg",
        "Content-Type": "application/json"
      }
    };

    this.http.post( url,data,options).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
