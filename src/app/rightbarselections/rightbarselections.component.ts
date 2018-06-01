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
  constructor() { 
  }
  selectedYearModel:string;


  years = arrays.years;
  months = arrays.months;
  sixmonths = arrays.sixmonths;
  quarters = arrays.quarters;
  periods = arrays.periods;
 
  
  
  options:string [];


  gotPeriodValue = function(value){
    if(value=="Monthly")this.options = this.months.map(x => x);
    if(value=="Quarterly")this.options = this.quarters.map(x => x);
    if(value=="Six-monthly")this.options = this.sixmonths.map(x => x);
    if(value=="Weekly")this.getWeeks();
  };

  getWeeks = function(){
    var sd = new Date(this.selectedYearModel,0,1);
    var ed = new Date(this.selectedYearModel,11,31);

    let utility = new UtilityserviceService();
    this.options = utility.getweeks(sd,ed);
  };

 
}
