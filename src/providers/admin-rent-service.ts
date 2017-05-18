import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {Rent} from "../app/model/rent";
import {SERVER_URL} from "../config";

/*
  Generated class for the AdminRentService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminRentService {

  private _headers: Headers;
  private _options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello AdminRentService Provider');
    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });

  }

  getListOfRentDetails():Observable<Rent[]>{
    let url = `${SERVER_URL}/rent`;
    return this.http.get(url)
                    .map((res:Response) => <Rent[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRentDetails(id: number):Observable<Rent>{
    let url = `${SERVER_URL}/rent/${id}`;
    return this.http.get(url)
                    .map(res => <Rent>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addRentDetails(rent:Rent):Observable<Rent[]>{
    let bodyString = JSON.stringify(rent);

    let url = `${SERVER_URL}/rent/add/`;

    return this.http.post(url, bodyString, this._options)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editRentDetails(rent:Rent):Observable<Rent[]>{
    let bodyString = JSON.stringify(rent);
    let url = `${SERVER_URL}/rent/edit`;
    return this.http.put(`${url}/${rent.id}`, bodyString, this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeDetails(rent:Rent):Observable<Rent[]>{
    let url = `${SERVER_URL}/rent/delete`;
    return this.http.delete(`${url}/${rent.id}`)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
