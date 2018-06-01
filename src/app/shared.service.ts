import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HeaderselectionsComponent } from 'src/app/headerselections/headerselections.component';
import { DatasetstabsComponent } from 'src/app/datasetstabs/datasetstabs.component';
import { Subject } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor() {
  }
  
  chips: string[];

  // Observable string sources
  private methodToChangeChips = new Subject<any>();
  private methodToUnselect = new Subject<any>();

   // Observable string streams
  chipServiceMethod = this.methodToChangeChips.asObservable();
  unselectServiceMethod = this.methodToUnselect.asObservable();

  //function to be called by component after further changes!
  callMethodToChangeChips(chipss) {
    this.methodToChangeChips.next(chipss);
  }
  callMethodToUnselect(chipss) {
    this.methodToUnselect.next(chipss);
  }
  
}
