export class User {
  id:number;
  fullname: string;
  email: string;
  password: string;
  address: string;
  phone: number;
  nic: string;
  username: string;
  userRole: number;
  licenseNo: string;
  available:boolean;
  jwtToken:string;


  User(){
    this.id = 0;
    this.fullname = "";
    this.email = "";
    this.password = "";
    this.address = "";
    this.phone = 0;
    this.nic = "";
    this.username = "";
    this.userRole = 0;
    this.licenseNo = "";
    this.available = false;
    this.jwtToken = "";

  }


/*
  private _name: string;
  private _email: string;
  private _password: string;
  private _address: string;
  private _phone: number;
  private _nic: string;
  private _userRole: number;
  private _licenseNo: string;

  constructor(){

  }

  get name():string {
    return this._name;
  }
  set name(theName:string) {
    this._name = theName;
  }

  get email():string {
    return this._email;
  }
  set email(theEmail:string) {
    this._email = theEmail;
  }

  get password():string {
    return this._password;
  }
  set password(thePassword:string) {
    this._password = thePassword;
  }

  get address():string {
    return this._address;
  }
  set address(theAddress:string) {
    this._address = theAddress;
  }

  get phone():number {
    return this._phone;
  }
  set phone(thePhone:number) {
    this._phone = thePhone;
  }

  get nic():string {
    return this._nic;
  }
  set nic(theNic:string) {
    this._nic = theNic;
  }

  get userRole():number {
    return this._userRole;
  }
  set userRole(theUserRole:number) {
    this._userRole = theUserRole;
  }

  get licenseNo():string {
    return this._licenseNo;
  }
  set licenseNo(theLicenseNo:string) {
    this._licenseNo = theLicenseNo;
  }*/

}
