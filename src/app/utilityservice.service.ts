import { Injectable } from '@angular/core';

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
      arrayw.push({"name":date,"value":val});
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

}
