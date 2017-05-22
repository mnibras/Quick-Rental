import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {User} from "../app/model/user";

/*
  Generated class for the CustomerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CustomerService {

  private baseURL:string = '';
  private _headers: Headers;
  private _options: RequestOptions;

  constructor(public http: Http) {
    this.baseURL = 'http://localhost:8080/rest/';

    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers }); 
  }

  getCustomer(id:number):Observable<User>{
    let url = `${this.baseURL}customer/${id}`;
    return this.http.get(url,this._options)
                    .map(res => <User>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCustomersList():Observable<User[]>{
    let url = `${this.baseURL}customer`;
    return this.http.get(url,this._options)
                    .map((res:Response) => <User[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addCustomer(user: User): Observable<User[]>{

    let bodyString = JSON.stringify(user); // Stringify payload
    let url = `${this.baseURL}customer/add/`;

    return this.http.post(url, user, this._options) // ...using post request
                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  }

  editCustomer(user: User): Observable<User[]>{
    let bodyString = JSON.stringify(user);
    let url = `${this.baseURL}customer/edit`;

    return this.http.put(`${url}/${user.nic}`, user, this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeCustomer(user: User): Observable<User[]>{
    let url = `${this.baseURL}customer/delete`;
    return this.http.delete(`${url}/${user.id}`)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
