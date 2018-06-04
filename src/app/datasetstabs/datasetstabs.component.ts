import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { MatSelectModule } from '@angular/material';
import { SharedService } from 'src/app/shared.service';
import { HeaderselectionsComponent } from 'src/app/headerselections/headerselections.component';

@Component({
  selector: 'app-datasetstabs',
  templateUrl: './datasetstabs.component.html',
  styleUrls: ['./datasetstabs.component.css']
})
export class DatasetstabsComponent {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  selectedDataset:string;

  datasetsm = [];
  constructor(private callingBridge: SharedService) {

    this.callingBridge.chipServiceMethod.subscribe(
      (chipss) => {
        chipss.sort(function (a, b) {
          var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
            return -1
          if (nameA > nameB)
            return 1
          return 0 //default return value (no sorting)
        })
        if (chipss) this.datasetsm = chipss.map(x => x);
        this.callingBridge.callMethodToSendDataSet(this.datasetsm);

      }
    );
  }

  selectChip(chipid: any): void{
    this.selectedDataset = chipid;
    this.callingBridge.callMethodToSendDataSet(this.selectedDataset);
  }

  remove(data: any): void {
    let index = this.datasetsm.indexOf(data);

    if (index >= 0) {
      this.datasetsm.splice(index, 1);
      this.callingBridge.callMethodToUnselect(this.datasetsm);
      if(index==0)this.callingBridge.callMethodToSendDataSet(this.datasetsm[0].id);
    }
  }

}
