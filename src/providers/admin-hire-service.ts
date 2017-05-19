import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import {Hire} from "../app/model/hire";
import {SERVER_URL} from "../config";
import {AuthHttp} from "angular2-jwt";

/*
  Generated class for the AdminHireService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminHireService {

  private _headers: Headers;
  private _options: RequestOptions;

  constructor(public http: Http,private authHttp: AuthHttp) {
    console.log('Hello AdminDriverService Provider');
    this._headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'});
    this._options = new RequestOptions({ headers: this._headers });
  }


  getListOfHireDetails():Observable<Hire[]>{
    let url = `${SERVER_URL}/hire`;
    return this.authHttp.get(url,this._options)
                    .map((res:Response) => <Hire[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getListOfPendingHireDetails():Observable<Hire[]>{
    let url = `${SERVER_URL}/hire/pending`;
    return this.authHttp.get(url,this._options)
      .map((res:Response) => <Hire[]>(res.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getListOfAcceptedHireDetails():Observable<Hire[]>{
    let url = `${SERVER_URL}/hire/accepted`;
    return this.authHttp.get(url,this._options)
      .map((res:Response) => <Hire[]>(res.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getListOfRejectedHireDetails():Observable<Hire[]>{
    let url = `${SERVER_URL}/hire/rejected`;
    return this.authHttp.get(url,this._options)
      .map((res:Response) => <Hire[]>(res.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getListOfCompletedHireDetails():Observable<Hire[]>{
    let url = `${SERVER_URL}/hire/completed`;
    return this.authHttp.get(url,this._options)
      .map((res:Response) => <Hire[]>(res.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHireDetails(id:number):Observable<Hire>{
    let url = `${SERVER_URL}/hire/${id}`;
    return this.authHttp.get(url)
                    .map(res => <Hire>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  addHireDetails(hire:Hire):Observable<Hire[]>{
    let body = JSON.stringify(hire);
    let url = `${SERVER_URL}/hire/add/`;
    return this.authHttp.post(url, hire, this._options)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editHireDetails(hire:Hire):Observable<Hire[]>{
    let body = JSON.stringify(hire);
    let url = `${SERVER_URL}/driver/edit`;
    console.log(hire);
    return this.authHttp.put(`${url}/${hire.id}`, hire, this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeHireDetails(id:number):Observable<Hire[]>{
    let url = `${SERVER_URL}/driver/delete`;
    return this.authHttp.delete(`${url}/${id}`)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  acceptHireDetails(hire:Hire){
    let body = JSON.stringify(hire);
    let url = `${SERVER_URL}/hire/edit`;
    return this.authHttp.put(url, body, this._options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  rejectHireDetails(hire:Hire){
    let body = JSON.stringify(hire);
    let url = `${SERVER_URL}/hire/edit`;
    return this.authHttp.put(url, body, this._options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  completeHireDetails(hire:Hire){
    let body = JSON.stringify(hire);
    let url = `${SERVER_URL}/hire/edit`;
    return this.authHttp.put(url, body, this._options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
