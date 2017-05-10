import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

  constructor(public http: Http) {
    console.log('Hello AdminDriverService Provider');
    this.baseURL = 'http://localhost:8080/rest/';
  }

  getVehicle(id:number):Observable<Vehicle>{
    let url = `${this.baseURL}vehicle/${id}`;
    return this.http.get(url)
                    .map(res => <Vehicle>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  
  }

  getVehiclesList():Observable<Vehicle[]>{
    let url = `${this.baseURL}vehicle`;
    return this.http.get(url)
                    .map((res:Response) => <Vehicle[]>(res.json()))
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle[]>{
    //console.log("admin driver service called");
    //console.log("User name"+ user.name);
    //let url = `${this.baseURL}driver/add/`;
    //this.http.post(url,user).map(res => res.json());

    let bodyString = JSON.stringify(vehicle); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let url = `${this.baseURL}vehicle/add/`;

    return this.http.post(url, vehicle, options) // ...using post request
                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   
  }

  editVehicle(vehicle: Vehicle): Observable<Vehicle[]>{
    let bodyString = JSON.stringify(vehicle);
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });

    let url = `${this.baseURL}vehicle/edit`;

    return this.http.put(`${url}/${vehicle.id}`, vehicle, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
   
  }

  removeVehicle(vehicle: Vehicle): Observable<Vehicle[]>{
    let url = `${this.baseURL}vehicle/delete`;
     return this.http.delete(`${url}/${vehicle.id}`) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

}
