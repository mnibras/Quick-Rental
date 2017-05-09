export interface Vehicle {

  id: number;
  type: string; //car,van
  noOfSeats:number;
  vehicleNo: string;
  modelNo: string; //BMW
  colour:string;
  year: number;
  currentMillage: number;
  isAvailable:boolean;


  /*private _name: string;
  private _type: string; //car,van
  private _vehicleNo: string;
  private _Model: string; //BMW
  private _year: number;
  private _currentMillage: number;

  constructor(){

  }

  get name():string {
    return this._name;
  }
  set name(theName:string) {
    this._name = theName;
  }

  get type():string {
    return this._type;
  }
  set type(theType:string) {
    this._type = theType;
  }

  get vehicleNo():string {
    return this._vehicleNo;
  }
  set vehicleNo(theVehicleNo:string) {
    this._vehicleNo = theVehicleNo;
  }

  get model():string {
    return this._Model;
  }
  set model(theModel:string) {
    this._Model = theModel;
  }

  get year():number {
    return this._year;
  }
  set year(theYear:number) {
    this._year = theYear;
  }

  get currentMillage():number {
    return this._currentMillage;
  }
  set currentMillage(theCurrentMillage:number) {
    this._currentMillage = theCurrentMillage;
  }*/

}
