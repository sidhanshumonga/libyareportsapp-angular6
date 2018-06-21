import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { FormControl } from '@angular/forms';
import { MatSelectModule, MatSelectChange, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { DatasetstabsComponent } from 'src/app/datasetstabs/datasetstabs.component';
import { SharedService } from 'src/app/shared.service';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import * as x from 'src/app/CONSTANTS';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-headerselections',
  templateUrl: './headerselections.component.html',
  styleUrls: ['./headerselections.component.css']
})

export class HeaderselectionsComponent {

  reports = [
    { value: 'Ewarn Report', viewValue: 'Ewarn Report' },
    { value: 'PHC Report', viewValue: 'PHC Report' },
    { value: 'Hospital Report', viewValue: 'Hospital Report' },
    { value: 'Medical Center', viewValue: 'Medical Center' }
  ];

  //multiple selection form control for datasets
  multidatasets = new FormControl();
  selectedvalues: {
    id: string,
    name: string
  };
  reportName: string;
  datasetsArray = [];
  checked: boolean;
  ouisthere:boolean = false;


  constructor(private callingBridge: SharedService, private ajaxService: AjaxserviceService) {
    
    //method which gets values from datasettabs!
    this.callingBridge.unselectServiceMethod.subscribe(
      (chipss) => {
        if (chipss) this.selectedvalues = chipss.map(x => x);
      }
    );

    this.callingBridge.orgUnitServiceMethod.subscribe(
      (ou) => {
        if(ou!==undefined) this.ouisthere=true;
      }
    );

    this.callingBridge.ouServiceMethod.subscribe(
      (array) => {
         this.reports = array.map(x => x);
      }
    );
  }



  chips(event, value) {
    //service to send values in datasettabs!
    this.callingBridge.callMethodToChangeChips(value);
  };

  getDatasets() {
    this.datasetsArray = [];
    this.ajaxService.getDatasets()
      .subscribe(datas => {
        var datasets = datas.dataSets;
        for (var i = 0; i < datasets.length; i++) {
          if (datasets[i].attributeValues.length != 0) {
            var attr = datasets[i].attributeValues;
            for (var j = 0; j < attr.length; j++) {
              if (attr[j].attribute.name == 'Report app' && attr[j].value == 'true') {
                for (var k = 0; k < attr.length; k++) {
                  // if (attr[k].attribute.name != 'Report app' && attr[k].value == 'true') {
                  if (attr[k].attribute.name == this.reportName) {
                    var obj = { 'name': datasets[i].name, 'value': attr[k].attribute.name, 'id': datasets[i].id }; // attr[k].attribute.name};
                    this.datasetsArray.push(obj);
                  }
                }
                // }
              }
            }
          }
        }
      });
  }

  validatePeriods() {
    let utility = new UtilityserviceService();
    utility.setHeaders("rn", this.reportName);
    if (this.reportName == "Ewarn Report") {
      this.callingBridge.callMethodToValidatePeriods(true);
      if (!this.checked) this.callingBridge.callMethodToChangeChips(x.DATASET_ID_EWARN_REPORT);
    }
    else {
      this.callingBridge.callMethodToValidatePeriods(false);
      if (this.reportName == "PHC Report" && !this.checked) this.callingBridge.callMethodToChangeChips(x.DATASETS_ID_PHC);
      if (this.reportName == "Hospital Report" && !this.checked) this.callingBridge.callMethodToChangeChips(x.DATASETS_ID_HOSPITAL);
      if (this.reportName == "Medical Center" && !this.checked) this.callingBridge.callMethodToChangeChips(x.DATASETS_ID_MEDICALCENTER);
    }
    this.callingBridge.callMethodToSendDsArray(this.reportName);
    this.getDatasets();
  }

  clearChips(val) {
    if (!val && this.reportName != "Ewarn Report") this.callingBridge.callMethodToChangeChips([]);
    else {
      if (this.reportName == "Ewarn Report") this.callingBridge.callMethodToChangeChips(x.DATASET_ID_EWARN_REPORT);
      if (this.reportName == "PHC Report") this.callingBridge.callMethodToChangeChips(x.DATASETS_ID_PHC);
      if (this.reportName == "Hospital Report") this.callingBridge.callMethodToChangeChips(x.DATASETS_ID_HOSPITAL);
      if (this.reportName == "Medical Center") this.callingBridge.callMethodToChangeChips(x.DATASETS_ID_MEDICALCENTER);
    }
  }


}

