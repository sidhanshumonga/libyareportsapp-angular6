import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderselectionsComponent } from 'src/app/headerselections/headerselections.component';
import { DatasetstabsComponent } from 'src/app/datasetstabs/datasetstabs.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  chips: string[];

  //code to call function from header to datasettabs
  public methodToChangeChips = new Subject<any>();
  chipServiceMethod = this.methodToChangeChips.asObservable();
  callMethodToChangeChips(chipss) {
    this.methodToChangeChips.next(chipss);
  }


  //code to call function from datasettabs to header
  public methodToUnselect = new Subject<any>();
  unselectServiceMethod = this.methodToUnselect.asObservable();
  callMethodToUnselect(chipss) {
    this.methodToUnselect.next(chipss);
  }

  //code to call function from header to datasettabs
  public methodTovalidatePeriods = new Subject<any>();
  periodValidateServiceMedthod = this.methodTovalidatePeriods.asObservable();
  callMethodToValidatePeriods(value){
    this.methodTovalidatePeriods.next(value);
  }

  //code to call function from orgunit to mainselections
  public methodToSendOrgUnit = new Subject<any>();
  orgUnitServiceMethod = this.methodToSendOrgUnit.asObservable();
  callMethodToSendOrgUnit(ou){
    this.methodToSendOrgUnit.next(ou);
  }

  //code to call function from datastetstabs to mainselections 
  public methodToSendDataSet = new Subject<any>();
  dataSetServiceMethod = this.methodToSendDataSet.asObservable();
  callMethodToSendDataSet(ds){
    this.methodToSendDataSet.next(ds);
  }

  //code to call function from mainselections to tablecard
  public methodToSendParams = new Subject<any>();
  paramsServiceMethod = this.methodToSendParams.asObservable();
  callMethodToSendParams(array){
    this.methodToSendParams.next(array);
  }

  //code to call function from orglibrary to headers
  public methodToSendOu = new Subject<any>();
  ouServiceMethod = this.methodToSendOu.asObservable();
  callMethodToSendOu(array){
    this.methodToSendOu.next(array);
  }

  //code to call function from tablecard to alltables
  public methodToSendOuandPe = new Subject<any>();
  ouandPeServiceMethod = this.methodToSendOuandPe.asObservable();
  callMethodToSendOuandPe(array){
    this.methodToSendOuandPe.next(array);
  }

  //code to call function from headers to alltables
  public methodToSendDsArray = new Subject<any>();
  dsArrayServiceMethod = this.methodToSendDsArray.asObservable();
  callMethodToSendDsArray(array){
    this.methodToSendDsArray.next(array);
  }
}
