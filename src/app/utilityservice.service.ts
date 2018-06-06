import { Injectable } from '@angular/core';
import * as arrays from 'src/app/CONSTANTS'
import { IfStmt } from '@angular/compiler';
// import { AjaxserviceService } from 'src/app/ajaxservice.service';


export interface typearr {
  name: string,
  value: string
}

@Injectable({
  providedIn: 'root'
})



export class UtilityserviceService {

  constructor() { }

  getweeks(sd, ed) {
    var arrayw = [];
    var i = 1;
    while (ed > sd) {
      var wsd = new Date(sd);
      var wed = new Date(sd);
      wed = new Date(wed.setDate(wed.getDate() + 6));
      let j;
      if (i < 10) { j = "0" + i; }
      else { j = i; }
      var date = new Date(wsd).getFullYear() + "W" + j + " - " + this.getProperDate(wsd) + " - " + this.getProperDate((wed));
      var val = new Date(wsd).getFullYear() + "W" + j;
      arrayw.push({ "name": date, "value": val });
      i++;
      sd = new Date(sd).setDate(new Date(sd).getDate() + 7);
    }
    return arrayw;
  }

  getProperDate(d) {
    var y = d.getFullYear();
    var m = (d.getMonth() + 1);
    var dd = d.getDate();
    if (parseInt(m) < 10) { m = '0' + m }
    if (parseInt(dd) < 10) { dd = '0' + dd }
    return y + "/" + m + "/" + dd;
  }

  setHeaders(type: any, value: any) {
    if (type == "ds") {
      var dsname = this.dataSetName(value);
      $("#selected-dataset-name").text(dsname);
    }
    else if (type == "pe") {
      if (value.length > 6) var name = this.periodName(value.substring(4, 7));
      else var name = this.periodName(value.substring(4, 6));
      var year = value.substring(0, 4);
      if (name === undefined) name = "";
      $("#selected-period-name").text(name + ", " + year);
    }
    else if (type == "ou") {
      $("#selected-ou-name").text(value);
    }
    else if (type == "rn") {
      $("#selected-report-name").text(value);
    }
    else { }
  }

  periodName(value) {
    for (let m of arrays.months) {
      if (m.value == value) return m.name;
    };
    for (let q of arrays.quarters) {
      if (q.value == value) return q.name;
    };
    for (let s of arrays.sixmonths) {
      if (s.value == value) return s.name;
    };
    for (let w of arrays.weeks) {
      if (w.value == value) return w.name;
    };
  }

  dataSetName(value) {
    for (let e of arrays.DATASET_ID_EWARN_REPORT) {
      if (e.id == value) return e.name;
    };
    for (let p of arrays.DATASETS_ID_PHC) {
      if (p.id == value) return p.name;
    };
    for (let h of arrays.DATASETS_ID_HOSPITAL) {
      if (h.id == value) return h.name;
    };
    for (let m of arrays.DATASETS_ID_MEDICALCENTER) {
      if (m.id == value) return m.name;
    };
  }

  // export to excel function in sheets //

  tablesToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
      , tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
        + '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>'
        + '<Styles>'
        + '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>'
        + '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>'
        + '</Styles>'
        + '{worksheets}</Workbook>'
      , tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>'
      , tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>'
      , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
      , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (tables, wsnames, wbname, appname) {
      var ctx = "";
      var workbookXML = "";
      var worksheetsXML = "";
      var rowsXML = "";
      var link = "";
      var ctx2 = "";
      var ctx3 = "";

      for (var i = 0; i < tables.length; i++) {
        if (!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);
        for (var j = 0; j < tables[i].rows.length; j++) {
          this.rowsXML += '<Row>'
          for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
            var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
            var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
            var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
            this.dataValue = (dataValue) ? dataValue : tables[i].rows[j].cells[k].innerHTML;
            var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
            this.dataFormula = (dataFormula) ? dataFormula : (this.appname == 'Calc' && this.dataType == 'DateTime') ? this.dataValue : null;
            this.ctx = {
              attributeStyleID: (this.dataStyle == 'Currency' || this.dataStyle == 'Date') ? ' ss:StyleID="' + this.dataStyle + '"' : ''
              , nameType: (this.dataType == 'Number' || this.dataType == 'DateTime' || this.dataType == 'Boolean' || this.dataType == 'Error') ? this.taType : 'String'
              , data: (this.dataFormula) ? '' : this.dataValue
              , attributeFormula: (this.dataFormula) ? ' ss:Formula="' + this.dataFormula + '"' : ''
            };
            this.rowsXML += format(tmplCellXML, this.ctx);
          }
          this.rowsXML += '</Row>'
        }
        this.ctx2 = { rows: this.rowsXML, nameWS: wsnames[i] || 'Sheet' + i };
        this.worksheetsXML += format(tmplWorksheetXML, this.ctx2);
        this.rowsXML = "";
      }

      this.ctx3 = { created: (new Date()).getTime(), worksheets: this.worksheetsXML };
      this.workbookXML = format(tmplWorkbookXML, this.ctx3);

      console.log(this.workbookXML);

      this.link = document.createElement("a");
      this.link.href = uri + base64(this.workbookXML);
      this.link.download = wbname || 'Workbook.xls';
      this.link.target = '_blank';
      document.body.appendChild(this.link);
      this.link.click();
      document.body.removeChild(this.link);
    }
  })();

}
