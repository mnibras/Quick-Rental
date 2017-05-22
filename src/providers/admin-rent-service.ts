import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {Rent} from "../app/model/rent";

/*
  Generated class for the AdminRentService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminRentService {
   private baseURL:string = '';
   private _headers: Headers;
   private _options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello AdminRentService Provider');
    this.baseURL = 'http://localhost:8080/rest';

    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers }); 
  }

  getListOfRentDetails():Observable<Rent[]>{
    let url = `${this.baseURL}/rent`;
    return this.http.get(url,this._options)
                    .map((res:Response) => <Rent[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRentDetailsByUser(customerId: number):Observable<Rent[]>{
    let url = `${this.baseURL}/rent/rentsByUser/${customerId}`;
    
    return this.http.get(url,this._options)
                    .map((res:Response) => <Rent[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRentDetails(id: number):Observable<Rent>{
    let url = `${this.baseURL}/rent/${id}`;
    console.log('url : '+url);
    return this.http.get(url,this._options)
                    .map(res => <Rent>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addRentDetails(rent:Rent, customerId:number, vehicleId: number):Observable<Rent>{
    let bodyString = JSON.stringify(rent);
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    

    let url = `${this.baseURL}/rent/add/${customerId}/${vehicleId}`;

    return this.http.post(url, bodyString, this._options)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editRentDetails(rent:Rent):Observable<Rent[]>{
    let bodyString = JSON.stringify(rent);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Basic ' + btoa('username:password'));


    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}/rent/edit`;

    return this.http.put(`${url}/${rent.id}`, bodyString, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeRentDetails(id:number):Observable<string>{
    let url = `${this.baseURL}/rent/delete/${id}`;
    return this.http.delete(url,this._options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

                        
  }

}
