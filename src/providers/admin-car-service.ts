import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import {Vehicle} from "../app/model/vehicle";

/*
  Generated class for the AdminCarService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdminCarService {

  private baseURL:string = '';
  public vehicleDto: Vehicle;

  constructor(public http: Http) {
    console.log('Hello AdminDriverService Provider');
    this.baseURL = 'http://localhost:8080/rest';
  }

  getVehicle(id:number):Observable<Vehicle>{
    let url = `${this.baseURL}/vehicle/${id}`;
    return this.http.get(url)
                    .map(res => <Vehicle>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

  getVehiclesList(): Observable<Vehicle[]>{
    let url = `${this.baseURL}/vehicle`;

    return this.http.get(url)
                    .map((res:Response) => <Vehicle[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    /*var response = this.http.get(url).map(res => res.json());
    console.log("getVehiclesList : "+ JSON.stringify(response));
    return response;*/
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle>{
    console.log("addVehicle : "+ JSON.stringify(vehicle));
    const body = JSON.stringify(vehicle);
    let headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*'});

    let options = new RequestOptions({ headers: headers });


    let url = `${this.baseURL}/vehicle/add`;

    return this.http.post(url, body,options)
                      .map((res:Response) => res.json());
  }

  editVehicle(vehicle: Vehicle): Observable<Vehicle>{
    console.log("editVehicle : "+ JSON.stringify(vehicle));
    const body = JSON.stringify(vehicle);
    let headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'PUT',
      'Access-Control-Allow-Origin': '*'});

    let options = new RequestOptions({ headers: headers });


    let url = `${this.baseURL}/vehicle/edit`;

    return this.http.put(url, body, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeVehicle(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json' ,
      "Authorization": "Basic " + btoa('username:password'),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'PUT',
      'Access-Control-Allow-Origin': '*'});

    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}/vehicle/delete/${id}`;
     return this.http.delete(url,options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
