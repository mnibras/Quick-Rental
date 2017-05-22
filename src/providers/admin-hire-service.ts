import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
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


  getListOfHireDetails():Observable<Hire[]>{
    let url = `${this.baseURL}/hire`;
    return this.http.get(url,this._options)
                    .map((res:Response) => <Hire[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHireDetails(id:number):Observable<Hire>{
    let url = `${this.baseURL}/hire/${id}`;
    console.log('service fdbfghgjhjhjgjjhj');
    console.log('url: '+url);
    return this.http.get(url,this._options)
                    .map(res => <Hire>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHireDetailsByUser(customerId: number):Observable<Hire[]>{
    let url = `${this.baseURL}/hire//hireByUser/${customerId}`;
    return this.http.get(url,this._options)
                    .map((res:Response) => <Hire[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  addHireDetails(hire:Hire, customerId: number):Observable<Hire[]>{
    let bodyString = JSON.stringify(hire);

    let url = `${this.baseURL}/hire/add/${customerId}`;
    return this.http.post(url, hire, this._options)
                      .map((res:Response) => res.json()) 
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

  editHireDetails(hire:Hire):Observable<Hire[]>{
    let bodyString = JSON.stringify(hire);

    let url = `${this.baseURL}/hire//edit`;

    console.log(hire);

    return this.http.put(`${url}/${hire.id}`, hire, this._options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

  removeHireDetails(id:number):Observable<string>{
    let url = `${this.baseURL}/hire/delete/${id}`;
    return this.http.delete(url,this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
