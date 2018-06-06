import { Injectable } from '@angular/core';
import * as arrays from 'src/app/CONSTANTS'
// import { AjaxserviceService } from 'src/app/ajaxservice.service';

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
      var year = value.substring(0, 4);
      var name = this.periodName(value.substring(4, 6));
      $("#selected-period-name").text(name + " " + year);
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
    for (let m of arrays.months){
      if (m.value == value) return m.name;
    };
    for (let q of arrays.quarters){
      if (q.value == value) return q.name;
    };
    for (let s of arrays.sixmonths){
      if (s.value == value) return s.name;
    };
    for (let w of arrays.weeks){
      if (w.value == value) return w.name;
    };
  }

  dataSetName(value) {
    for (let e of arrays.DATASET_ID_EWARN_REPORT){
      if (e.id == value) return e.name;
    };
    for (let p of arrays.DATASETS_ID_PHC){
      if (p.id == value) return p.name;
    };
    for (let h of arrays.DATASETS_ID_HOSPITAL){
      if (h.id == value) return h.name;
    };
    for (let m of arrays.DATASETS_ID_MEDICALCENTER){
      if (m.id == value) return m.name;
    };
  }

}
export interface typearr {
  name: string,
  value: string
}