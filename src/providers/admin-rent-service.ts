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

  constructor(public http: Http) {
    console.log('Hello AdminRentService Provider');
    this.baseURL = 'http://localhost:8080/';
  }

  getListOfRentDetails():Observable<Rent[]>{
    let url = `${this.baseURL}rent`;
    return this.http.get(url)
                    .map((res:Response) => <Rent[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRentDetails(id: number):Observable<Rent>{
    let url = `${this.baseURL}rent/${id}`;
    return this.http.get(url)
                    .map(res => <Rent>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addRentDetails(rent:Rent):Observable<Rent[]>{
    let bodyString = JSON.stringify(rent);
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}rent/add/`;

    return this.http.post(url, rent, options)
                      .map((res:Response) => res.json()) 
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editRentDetails(rent:Rent):Observable<Rent[]>{
    let bodyString = JSON.stringify(rent);
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}rent/edit`;

    return this.http.put(`${url}/${rent.id}`, rent, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeDetails(rent:Rent):Observable<Rent[]>{
    let url = `${this.baseURL}rent/delete`;
    return this.http.delete(`${url}/${rent.id}`) 
                        .map((res:Response) => res.json()) 
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

}
