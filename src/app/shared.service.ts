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
  private methodToChangeChips = new Subject<any>();
  chipServiceMethod = this.methodToChangeChips.asObservable();
  callMethodToChangeChips(chipss) {
    this.methodToChangeChips.next(chipss);
  }


  //code to call function from datasettabs to header
  private methodToUnselect = new Subject<any>();
  unselectServiceMethod = this.methodToUnselect.asObservable();
  callMethodToUnselect(chipss) {
    this.methodToUnselect.next(chipss);
  }

  //code to call function from header to datasettabs
  private methodTovalidatePeriods = new Subject<any>();
  periodValidateServiceMedthod = this.methodTovalidatePeriods.asObservable();
  callMethodToValidatePeriods(value){
    this.methodTovalidatePeriods.next(value);
  }


}
