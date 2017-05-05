import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firbase from 'firebase';


/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {
  public fireAuth: any;
  public userProfile: any;
  user: any;

  constructor(public http: Http) {
    this.fireAuth = firbase.auth();
    this.userProfile = firbase.database().ref('user');

  }

  signUpUser(user){
      return this.fireAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((newUser) => {
            this.fireAuth.signInWithEmailAndPassword(user.email, user.password)
                .then((authenticatedUser) =>{
                    this.userProfile.child(authenticatedUser.uid).set({
                        name: user.fullname,
                        email: user.email,
                        address: user.address,
                        phone: user.phone,
                        type: user.type
                    });
                });
        });      
  }

  loginUser(email: String, password: String): any{
      return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(){
      return this.fireAuth.signOut();
  }

}
