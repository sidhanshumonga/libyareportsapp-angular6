import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AjaxserviceService } from 'src/app/ajaxservice.service';

@Component({
  selector: 'app-tablecard',
  templateUrl: './tablecard.component.html',
  styleUrls: ['./tablecard.component.css']
})

export class TablecardComponent {


  ou:string;
  pe:string;
  ds:string;

  constructor(private callingBridge: SharedService, private ajax: AjaxserviceService) {
    //method service which gets selectedOrgUnit from orgunitlibrary
    this.callingBridge.paramsServiceMethod.subscribe(
      (params) => {
        this.ou = params[0];
        this.pe = params[1];
        this.ds = params[2];
        this.displayReport();
      }
    );
  }

  displayReport(){
    this.ajax.getDatasetHTML(this.ou,this.pe,this.ds).subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.modifyReport(res);
      }, 1000);
      
    });
  }

  modifyReport(response){

  }

}

