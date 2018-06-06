import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { MatSelectModule } from '@angular/material';
import { SharedService } from 'src/app/shared.service';
import { HeaderselectionsComponent } from 'src/app/headerselections/headerselections.component';
import * as $ from 'jquery';
import { UtilityserviceService } from '../utilityservice.service';

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
  selectedDataset: string;
  disable: boolean = false;

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
        
        if (chipss.length != 0) {
          this.callingBridge.callMethodToSendDataSet(this.datasetsm);
          let utility = new UtilityserviceService();
          utility.setHeaders("ds", this.datasetsm[0].id);
        }
        
        $("#dataset-count").text(this.datasetsm.length);
        
        $("#dataset-count").toggleClass("animated bounce");
        
        //shake effect
        setTimeout(function () {
          $("#dataset-count").toggleClass("animated bounce");
        }, 1500);

      }
    );
  }

  selectChip(chipid: any): void {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
    this.selectedDataset = chipid;
    let utility = new UtilityserviceService();
    utility.setHeaders("ds", this.selectedDataset);
    this.callingBridge.callMethodToSendDataSet(this.selectedDataset);
  }

  remove(data: any): void {
    let index = this.datasetsm.indexOf(data);

    if (index >= 0) {
      this.datasetsm.splice(index, 1);
      this.callingBridge.callMethodToUnselect(this.datasetsm);
      $("#dataset-count").text(this.datasetsm.length);
      $("#dataset-count").toggleClass("animated bounce");
        //shake effect
        setTimeout(function () {
          $("#dataset-count").toggleClass("animated bounce");
        }, 1500);

      if (index == 0) {
        this.callingBridge.callMethodToSendDataSet(this.datasetsm);
        let utility = new UtilityserviceService();
        utility.setHeaders("ds", this.datasetsm[0].id);
      }
    }
  }

  showme() {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
  }

}
