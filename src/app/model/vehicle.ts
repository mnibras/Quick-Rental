export class Vehicle {

  public id: number;
  public type: string; //car,van
  public noOfSeats:number;
  public vehicleNo: string;
  public modelName: string; //BMW
  public colour:string;
  public year: number;
  public rentPerDay: number;
  public hirePerMilage: number;
  public currentMillage: number;
  public available: boolean;

  Vehicle(){
    this.id = 0;
    this.type = "";
    this.noOfSeats = 0;
    this.vehicleNo = "";
    this.modelName = "";
    this.rentPerDay = 0;
    this.hirePerMilage = 0;
    this.colour = "";
    this.year = 0;
    this.currentMillage = 0;
    this.available = false;
  }


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
