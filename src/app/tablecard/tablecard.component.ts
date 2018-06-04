import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-tablecard',
  templateUrl: './tablecard.component.html',
  styleUrls: ['./tablecard.component.css']
})

export class TablecardComponent {


  ou: string;
  pe: string;
  ds: string;

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

  displayReport() {
    this.ajax.getDatasetHTML(this.ou, this.pe, this.ds).subscribe(res => {
        this.modifyReport(res);
    });
  }

  modifyReport(response) {
    $("#custom-table").empty();
    $("#custom-table").append(response);
    $("#custom-table table").removeAttr("style");
    $("#custom-table table tr td span span").removeAttr("style");
    $("#custom-table table tr td span").removeAttr("style");
    $("#custom-table table tr td").removeAttr("style");
    $("#custom-table table tr").removeAttr("style");
    $("#custom-table table tr").removeAttr("height");
    $("#custom-table table tr td").removeAttr("bgcolor");
    $("#custom-table table tr td").removeAttr("height");
    $("#custom-table table tr td").removeAttr("width");
    $("#custom-table table").addClass("table table-bordered table-hover");
    $("#custom-table table").attr("width","100%");
  }
}

