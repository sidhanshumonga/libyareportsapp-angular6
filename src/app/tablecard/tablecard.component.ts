import { Component, OnInit,ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import * as $ from 'jquery';
import { LoaderComponent } from 'src/app/loader/loader.component';

@Component({
  selector: 'app-tablecard',
  templateUrl: './tablecard.component.html',
  styleUrls: ['./tablecard.component.css']
})

export class TablecardComponent {


  ou: string;
  pe: any;
  ds: string;

  constructor(private callingBridge: SharedService, private ajax: AjaxserviceService,private ONCLICK: ElementRef) {
    //method service which gets selectedOrgUnit from orgunitlibrary
    this.callingBridge.paramsServiceMethod.subscribe(
      (params) => {
        this.ou = params[0];
        this.pe = params[1];
        this.ds = params[2];
        if (this.ou === undefined) { alert("Please select organisation unit"); return; }
        if (this.pe === undefined) { alert("Please select period"); return; }
        if (this.ds === undefined) { alert("Please select at least one dataset"); return; }
        $("#custom-table table").remove();
        $("#custom-table p").remove();
        $("#loader-table").fadeIn(100);
        this.displayReport();
      }
    );
  }

  displayReport() {
    this.ajax.getDatasetHTML(this.ou, this.pe, this.ds).subscribe(res => {
      setTimeout(() => {
        $("#loader-table").fadeOut(500);
        $("#custom-table").fadeIn(1000);
        this.modifyReport(res);
      }, 4500);
    });
  }

  modifyReport(response) {
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
    $("#custom-table table tr td").attr("style", "word-wrap:break-word");
    $("#custom-table table").addClass("table table-bordered");
    $("#custom-table table").attr("style", "max-wdth:100% !important;" +
      "background-color:white !important;" +
      "box-shadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !important;text-align:right;transition: transform .2s;");
    if (this.ds != "h1Q03rJqNQr") {
      $("#custom-table table").attr("style", "max-wdth:100% !important;" +
        "background-color:white !important;" +
        "box-shadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !important;text-align:right;transition: transform .2s;" +
        "table-layout:fixed;");
    }
    // var newRow = '<p style="cursor:pointer;float:right" id="expanded" onClick="expandTable();">click</p>';
    // $('#custom-table').prepend(newRow);
   
  }

  expandTable(){
    // $('#custom-table').toggleClass('expand-table');
    var html = $("#custom-table").html();
    $("#append").empty();
    $("#append").html(html);
    $(".modal").fadeIn(800);
  }
  close(){
    $(".modal").fadeOut(800);
  }

}

