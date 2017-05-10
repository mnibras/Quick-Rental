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

  constructor(public http: Http) {
    console.log('Hello AdminDriverService Provider');
    this.baseURL = 'http://localhost:8080/rest/';
  }

  getDriver(id:number):Observable<User>{
    let url = `${this.baseURL}driver/${id}`;
    return this.http.get(url)
                    .map(res => <User>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDriversList():Observable<User[]>{
    let url = `${this.baseURL}driver`;
    return this.http.get(url)
                    .map((res:Response) => <User[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addDriver(user: User): Observable<User[]>{
    //console.log("admin driver service called");
    //console.log("User name"+ user.name);
    //let url = `${this.baseURL}driver/add/`;
    //this.http.post(url,user).map(res => res.json());

    let bodyString = JSON.stringify(user); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let url = `${this.baseURL}driver/add/`;

    return this.http.post(url, user, options) // ...using post request
                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  }

  editDriver(user: User): Observable<User[]>{
    let bodyString = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}driver/edit`;

    return this.http.put(`${url}/${user.nic}`, user, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeDriver(user: User): Observable<User[]>{
    let url = `${this.baseURL}driver/delete`;
    return this.http.delete(`${url}/${user.id}`)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
