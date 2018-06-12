import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import * as $ from 'jquery';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { MatSnackBar } from '@angular/material';
import { UtilityserviceService } from '../utilityservice.service';
import * as arrays from 'src/app/CONSTANTS';

@Component({
  selector: 'app-tablecard',
  templateUrl: './tablecard.component.html',
  styleUrls: ['./tablecard.component.css']
})

export class TablecardComponent {


  ou: string;
  pe: any;
  ds: string;
  selectedDatasets: any;

  dsNames = [];
  dsIds = [];

  constructor(private callingBridge: SharedService, private ajax: AjaxserviceService, public snackBar: MatSnackBar) {
   
    // method service which gets selectedDataset from datasetstab
    this.callingBridge.dataSetServiceMethod.subscribe(
      (ds) => {
        if (typeof ds == "object") {
          this.selectedDatasets = ds;
          for (let k in this.selectedDatasets) {
            this.dsNames.push(this.selectedDatasets[k].name);
          }
        }
        
      }
    );


    //method service which gets selectedOrgUnit from orgunitlibrary
    this.callingBridge.paramsServiceMethod.subscribe(
      (params) => {
        this.ou = params[0];
        this.pe = params[1];
        this.ds = params[2];
        if (this.ou === undefined) {
          this.openSnackBar("Please select organisation unit", "Error");
          return;
        }
        if (this.pe === undefined) {
          this.openSnackBar("Please select period", "Error");
          return;
        }
        if (this.ds === undefined) {
          this.openSnackBar("Please select at least one dataset", "Error");
          return;
        }
        $(".custom-table-div").empty();
        $(".custom-table-div p").remove();
        $(".custom-table-div style").remove();
        $("#loader-table").fadeIn(100);
        this.displayReport(this.ou, this.pe, this.ds);
      }
    );

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  displayReport(ou, pe, ds) {
    this.ajax.getDatasetHTML(ou, pe, ds).subscribe(res => {
      setTimeout(() => {
        $("#loader-table").fadeOut(500);
        $(".ex-element").show();
        $(".custom-table-div").fadeIn(1000);
        this.modifyReport(res);
      }, 3500);
    });
  }

  modifyReport(response) {
   
    $(".custom-table-div").append(response);
    $(".custom-table-div table").attr("id", "table1");
    $(".custom-table-div table").removeAttr("style");
    $(".custom-table-div style").remove();
    $(".custom-table-div table tr td span span").removeAttr("style");
    $(".custom-table-div table tr td span").removeAttr("style");
    $(".custom-table-div table tr td").removeAttr("style");
    $(".custom-table-div table tr").removeAttr("style");
    $(".custom-table-div table tr").removeAttr("height");
    $(".custom-table-div table tr td").removeAttr("bgcolor");
    $(".custom-table-div table tr td").removeAttr("height");
    $(".custom-table-div table tr td").removeAttr("width");
    $(".custom-table-div table").removeAttr("height");
    $(".custom-table-div table").removeAttr("width");
    $(".custom-table-div tr td").attr("style", "word-wrap:break-word;");
    // $(".custom-table table").attr("id", "table1");
    $(".custom-table-div table").addClass("table table-bordered table2excel");
    if (this.ds != "h1Q03rJqNQr") {
      $(".custom-table-div table").attr("style", "max-width:100% !important;" +
        "background-color:white !important;" +
        "box-shadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !important;text-align:right;transition: transform .2s;" +
        "table-layout:fixed;");
    }
    else {
      $(".custom-table-div table").attr("style", "max-width:100% !important;" +
        "background-color:white !important;" +
        "box-shadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !important;text-align:right;transition: transform .2s;");
    }

    $('table td:has(span)').text(function () {
      return $(this).text()
    })

    // $('.custom-print-table').html($('#custom-table-div table').html());

    // $('.custom-print-table table:has(table)').html(function () {
    //   return $(this).html()
    // });
  }

  expandTable() {
    // $('.custom-table').toggleClass('expand-table');
    var html = $(".custom-table").html();
    $("#append").empty();
    $("#append").html(html);
    $(".modal").fadeIn(800);
  }
  close() {
    $(".modal").fadeOut(800);
  }

  exportToExcel() {
    let util = new UtilityserviceService();
    util.tablesToExcel(['table1'], ['Dataset'], 'Datasets-Report.xls', 'Excel');
  }


  exportAllToExcel() {
    let util = new UtilityserviceService();
    // util.tablesToExcel(, ['Dataset'], 'Datasets-Report.xls', 'Excel');
  }


}

