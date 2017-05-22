import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../app/model/user";
import {Observable} from "rxjs";
import {SERVER_URL} from "../config";
import {AuthHttp} from "angular2-jwt";

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  private _headers: Headers;
  private _options: RequestOptions;

  constructor(public http: Http,
              private authHttp: AuthHttp) {
    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });
  }

  getUser(id:number): Observable<User> {

    let url = `${SERVER_URL}/user/get/${id}`;
    return this.authHttp.get(url,this._options)
      .map(res => <User>(res.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUsersList() {

  }

  editUser(user: User): Observable<User>{
    console.log("addUser : "+ JSON.stringify(user));
    const body = JSON.stringify(user);

    let url = `${SERVER_URL}/user/edit`;

    return this.authHttp.put(url, body, this._options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  addUser() {

  }

  deleteUser() {

  }

}
