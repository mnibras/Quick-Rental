import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');


    let url = `${this.baseURL}/vehicle/add`;

    return this.http.post(url, body,{headers:headers})
                      .map((res:Response) => res.json());
  }

  editVehicle(vehicle: Vehicle): Observable<Vehicle[]>{
    //let bodyString = JSON.stringify(vehicle);
    let headers = new Headers({ 'Content-Type': 'application/json' });


    let url = `${this.baseURL}/vehicle/edit`;

    return this.http.put(`${url}/${vehicle.id}`, vehicle, {headers:headers})
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeVehicle(vehicle: Vehicle): Observable<Vehicle[]>{
    let url = `${this.baseURL}/vehicle/delete`;
     return this.http.delete(`${url}/${vehicle.id}`)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
