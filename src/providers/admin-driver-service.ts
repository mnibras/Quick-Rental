import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {User} from "../app/model/user";
import {SERVER_URL} from "../config";
import {AuthHttp} from "angular2-jwt";

/*
  Generated class for the AdminDriverService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminDriverService {

  private _headers: Headers;
  private _options: RequestOptions;

  constructor(public http: Http, private authHttp: AuthHttp) {
    console.log('Hello AdminDriverService Provider');
    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });
  }

  getDriver(id:number):Observable<User>{
    let url = `${SERVER_URL}/driver/${id}`;
    return this.authHttp.get(url)
                    .map(res => <User>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDriversList():Observable<User[]>{
    let url = `${SERVER_URL}/driver`;
    return this.authHttp.get(url,this._options)
                    .map((res:Response) => <User[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addDriver(user: User): Observable<User>{
    console.log("addDriver : "+ JSON.stringify(user));
    const body = JSON.stringify(user);

    let url = `${SERVER_URL}/driver/add/`;

    return this.authHttp.post(url, body, this._options)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  editDriver(user: User): Observable<User>{
    console.log("editVehicle : "+ JSON.stringify(user));
    const body = JSON.stringify(user);

    let url = `${SERVER_URL}/driver/edit`;

    return this.authHttp.put(url, body, this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeDriver(id: number): Observable<string>{

    let url = `${SERVER_URL}/driver/delete/${id}`;
    return this.authHttp.delete(url,this._options)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
