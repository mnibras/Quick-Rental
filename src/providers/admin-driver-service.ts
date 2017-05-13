import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {User} from "../app/model/user";

/*
  Generated class for the AdminDriverService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminDriverService {

  private baseURL:string = '';
  private _headers: Headers;
  private _options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello AdminDriverService Provider');
    this.baseURL = 'http://localhost:8080/rest';
    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });
  }

  getDriver(id:number):Observable<User>{
    let url = `${this.baseURL}/driver/${id}`;
    return this.http.get(url)
                    .map(res => <User>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDriversList():Observable<User[]>{
    let url = `${this.baseURL}/driver`;
    return this.http.get(url,this._options)
                    .map((res:Response) => <User[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addDriver(user: User): Observable<User>{
    console.log("addDriver : "+ JSON.stringify(user));
    const body = JSON.stringify(user);

    let url = `${this.baseURL}/driver/add/`;

    return this.http.post(url, body, this._options)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  editDriver(user: User): Observable<User>{
    console.log("editVehicle : "+ JSON.stringify(user));
    const body = JSON.stringify(user);

    let url = `${this.baseURL}/driver/edit`;

    return this.http.put(url, body, this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeDriver(id: number): Observable<string>{

    let url = `${this.baseURL}/driver/delete/${id}`;
    return this.http.delete(url,this._options)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
