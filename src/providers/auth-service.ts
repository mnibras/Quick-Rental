import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {ReplaySubject, Observable} from "rxjs";
import {AuthHttp, JwtHelper} from "angular2-jwt";
import {Storage} from "@ionic/storage";


import {SERVER_URL} from "../config";
import {User} from "../app/model/user";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  private user : User;
  authUser = new ReplaySubject<any>(1);
  private _headers: Headers;
  private _options: RequestOptions;

  constructor(private readonly http: Http,
              private readonly authHttp: AuthHttp,
              private readonly storage: Storage,
              private readonly jwtHelper: JwtHelper) {

    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });
  }

  checkLogin() {
    this.storage.get('jwt').then(jwt => {

      if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
        this.authHttp.get(`${SERVER_URL}/authenticate`)
          .subscribe(() => this.authUser.next(jwt),
            (err) => this.storage.remove('jwt').then(() => this.authUser.next(null)));
        // OR
        // this.authUser.next(jwt);
      }
      else {
        this.storage.remove('jwt').then(() => this.authUser.next(null));
      }
    });
  }

  login(values: any): Observable<any> {
    return this.http.post(`${SERVER_URL}/login`, values)
      .map(response => response.text())
      .map(jwt => this.handleJwtResponse(jwt));
  }

  logout() {
    this.storage.remove('jwt').then(() => this.authUser.next(null));
  }

  signup(values: any): Observable<any> {
    return this.http.post(`${SERVER_URL}/signup`, values)
      .map(response => response.text())
      .map(jwt => {

        /*this.getLoggedInUser(values.username)
          .subscribe(data => {
            this.user = data;
            console.log("Username : "+ this.user.username + " userRole : " +this.user.userRole);
            this.storage.set('username', this.user.username);
            this.storage.set('userRole', this.user.userRole);
          });*/

        if (jwt !== 'EXISTS') {
          return this.handleJwtResponse(jwt);
        }
        else {
          return jwt;
        }
      });
  }

  getLoggedInUser(username:string): Observable<User>{
    console.log("getLoggedInUser : "+ username);
    let url = `${SERVER_URL}/user/${username}`;
    return this.authHttp.get(url,this._options)
      .map(res => <User>(res.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private handleJwtResponse(jwt: string) {
    return this.storage.set('jwt', jwt)
      .then(() => this.authUser.next(jwt))
      .then(() => jwt);
  }

}
