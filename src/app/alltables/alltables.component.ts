import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import * as $ from 'jquery';
import * as x from 'src/app/CONSTANTS';
// import { UtilityserviceService } from '../utilityservice.service';
import 'src/app/Jsfiles/sum.js';

declare var cellSumFunction: any;

@Component({
  selector: 'app-alltables',
  templateUrl: './alltables.component.html',
  styleUrls: ['./alltables.component.css']
})
export class AlltablesComponent{
ou: any;
pe: any;
ds: any;
dsArray: typearr[];
  constructor(private callingBridge: SharedService, private ajax: AjaxserviceService) { 
       //method service which gets selectedOrgUnit from orgunitlibrary
       this.callingBridge.ouandPeServiceMethod.subscribe(
        (params) => {
          this.ou = params[0];
          this.pe = params[1];
          $("#loader-table").fadeIn(100);
         this.displayReport(this.ou, this.pe);
        }
      );

      this.callingBridge.dsArrayServiceMethod.subscribe(
        (value) => {
          this.getAllDatasets(value);
        }
      );
  
  }

  getAllDatasets(rn){
      if (rn == "Ewarn Report") this.dsArray = x.DATASET_ID_EWARN_REPORT.map(x => x);
      if (rn == "PHC Report") this.dsArray = x.DATASETS_ID_PHC.map(x => x);
      if (rn == "Hospital Report") this.dsArray = x.DATASETS_ID_HOSPITAL.map(x => x);
      if (rn == "Medical Center") this.dsArray = x.DATASETS_ID_MEDICALCENTER.map(x => x);
  }

  displayReport(ou, pe) {
    
    for(let k=0;k<this.dsArray.length;k++){
     this.ds = this.dsArray[k].id;

    this.ajax.getDatasetHTML(ou, pe, this.ds).subscribe(res => {
        this.modifyReport(res);
      });
    }

    setTimeout(() => {
      $("#loader-table").fadeOut(500);
      $("#alltables").fadeIn(1000);
      window.print();
    }, 3500);
    $('#alltables').hide();
  }

  modifyReport(response) {
   
    $(".custom-all-tables-div").append(response);
    $(".custom-all-tables-div table").attr("id", "table1");
    $(".custom-all-tables-div table").removeAttr("style");
    $(".custom-all-tables-div style").remove();
    $(".custom-all-tables-div p").remove();
    $(".custom-all-tables-div table tr td span span").removeAttr("style");
    $(".custom-all-tables-div table tr td span").removeAttr("style");
    $(".custom-all-tables-div table tr td").removeAttr("style");
    $(".custom-all-tables-div table tr").removeAttr("style");
    $(".custom-all-tables-div table tr").removeAttr("height");
    $(".custom-all-tables-div table tr td").removeAttr("bgcolor");
    $(".custom-all-tables-div table tr td").removeAttr("height");
    $(".custom-all-tables-div table tr td").removeAttr("width");
    $(".custom-all-tables-div table").removeAttr("height");
    $(".custom-all-tables-div table").removeAttr("width");
    $(".custom-all-tables-div tr td").attr("style", "word-wrap:break-word;");
    $(".custom-all-tables-div table").addClass("table table-bordered table2excel");
    
      $(".custom-all-tables-div table").attr("style", "max-width:100% !important;" +
        "background-color:white !important;" +
        "box-shadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !important;text-align:right;transition: transform .2s;" +
        "");
   

    $('table td:has(span)').text(function () {
      return $(this).text()
    })

    cellSumFunction.sumReportsAll();
    console.log("success");
  }
}

export interface typearr{
  id: any,
  name: any
}