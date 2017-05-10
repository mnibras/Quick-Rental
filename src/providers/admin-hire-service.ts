import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {Hire} from "../app/model/hire";

/*
  Generated class for the AdminHireService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminHireService {

  private baseURL:string = '';

  constructor(public http: Http) {
    console.log('Hello AdminDriverService Provider');
    this.baseURL = 'http://localhost:8080/';
  }


  getListOfHireDetails():Observable<Hire[]>{
    let url = `${this.baseURL}hire`;
    return this.http.get(url)
                    .map((res:Response) => <Hire[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHireDetails(id:number):Observable<Hire>{
    let url = `${this.baseURL}hire/${id}`;
    return this.http.get(url)
                    .map(res => <Hire>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  addHireDetails(hire:Hire):Observable<Hire[]>{
    let bodyString = JSON.stringify(hire);
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}hire/add/`;

    return this.http.post(url, hire, options)
                      .map((res:Response) => res.json()) 
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

  editHireDetails(hire:Hire):Observable<Hire[]>{
    let bodyString = JSON.stringify(hire);
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}driver/edit`;

    return this.http.put(`${url}/${hire.id}`, hire, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

  removeHireDetails(hire:Hire):Observable<Hire[]>{
    let url = `${this.baseURL}driver/delete`;
    return this.http.delete(`${url}/${hire.id}`) 
                        .map((res:Response) => res.json()) 
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

}
