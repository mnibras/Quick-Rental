import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {Vehicle} from "../app/model/vehicle";
import {AuthHttp} from "angular2-jwt";
import {SERVER_URL} from "../config";

/*
  Generated class for the AdminCarService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminCarService {
  public vehicleDto: Vehicle;
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

  getVehicle(id:number):Observable<Vehicle>{
    let url = `${SERVER_URL}/vehicle/${id}`;
    return this.authHttp.get(url)
                    .map(res => <Vehicle>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getVehiclesList(): Observable<Vehicle[]>{
    let url = `${SERVER_URL}/vehicle`;

    return this.authHttp.get(url,this._options)
                    .map((res:Response) => <Vehicle[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    /*var response = this.http.get(url).map(res => res.json());
    console.log("getVehiclesList : "+ JSON.stringify(response));
    return response;*/
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle>{
    console.log("addVehicle : "+ JSON.stringify(vehicle));
    const body = JSON.stringify(vehicle);

    let url = `${SERVER_URL}/vehicle/add`;

    return this.authHttp.post(url, body,this._options)
                      .map((res:Response) => res.json());
  }

  editVehicle(vehicle: Vehicle): Observable<Vehicle>{
    console.log("editVehicle : "+ JSON.stringify(vehicle));
    const body = JSON.stringify(vehicle);

    let url = `${SERVER_URL}/vehicle/edit`;

    return this.authHttp.put(url, body, this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeVehicle(id: number): Observable<string>{

    let url = `${SERVER_URL}/vehicle/delete/${id}`;
     return this.authHttp.delete(url,this._options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
