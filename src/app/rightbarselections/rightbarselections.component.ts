import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { FormControl } from '@angular/forms';
import { MatSelectModule, MatSelectChange } from '@angular/material';
import { SharedService } from 'src/app/shared.service';
import * as arrays from 'src/app/CONSTANTS';
import { UtilityserviceService } from 'src/app/utilityservice.service'

@Component({
  selector: 'app-rightbarselections',
  templateUrl: './rightbarselections.component.html',
  styleUrls: ['./rightbarselections.component.css']
})
export class RightbarselectionsComponent {

  selectedYearModel: string;


  years = arrays.years;
  months = arrays.months;
  sixmonths = arrays.sixmonths;
  quarters = arrays.quarters;
  periods = arrays.periods;

  optionValue: string;
  disable: boolean;



  gotPeriodValue = function (value) {
    if (value == "Monthly") this.options = this.months.map(x => x);
    if (value == "Quarterly") this.options = this.quarters.map(x => x);
    if (value == "Six-monthly") this.options = this.sixmonths.map(x => x);
    if (value == "Weekly") this.getWeeks();
  };

  getWeeks = function (type) {
    if (type == "Weekly") {
      var sd = new Date(this.selectedYearModel, 0, 1);
      var ed = new Date(this.selectedYearModel, 11, 31);

      let utility = new UtilityserviceService();
      this.options = utility.getweeks(sd, ed);
    }
  };

  //function to get reports on table

  generateReport = function (period, year, option) {
    if (period == "Yearly") var reportPeriod = year;
    else var reportPeriod = year + option;
    console.log(reportPeriod);
  };


  constructor(private chipsService: SharedService) {

    //method service which gets value from headerseletions
    this.chipsService.periodValidateServiceMedthod.subscribe(
      (value) => {
        if (value) this.periods = ["Weekly"];
        else {
          this.periods = ["Monthly", "Quarterly", "Six-monthly", "Yearly"];
        }
      }
    );
  }
}
