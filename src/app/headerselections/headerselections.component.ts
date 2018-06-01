import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { FormControl } from '@angular/forms';
import { MatSelectModule, MatSelectChange } from '@angular/material';
import { DatasetstabsComponent } from 'src/app/datasetstabs/datasetstabs.component';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-headerselections',
  templateUrl: './headerselections.component.html',
  styleUrls: ['./headerselections.component.css']
})

export class HeaderselectionsComponent {
  
  reports = [
    { value: 'Ewarn Report', viewValue: 'Ewarn Report' },
    { value: 'PHC Report', viewValue: 'PHC Report' },
    { value: 'Hospital Report', viewValue: 'Hospital Report' },
    { value: 'Medical Center', viewValue: 'Medical Center' }
  ];
  //multiple selection form control for datasets
  multidatasets = new FormControl();
  selectedvalues:any [];
  datasets = [
    { value: 'dataset1 dataset1', viewValue: 'dataset1' },
    { value: 'dataset2 dataset1dataset1', viewValue: 'dataset2' },
    { value: 'dataset3 dataset1dataset1', viewValue: 'dataset3' },
    { value: 'dataset4 dataset1 dataset1 dataset1', viewValue: 'dataset4' },
    { value: 'dataset5', viewValue: 'dataset5' },
    { value: 'dataset6', viewValue: 'dataset6' },
    { value: 'dataset7', viewValue: 'dataset7' },
    { value: 'dataset8', viewValue: 'dataset8' },
    { value: 'dataset9', viewValue: 'dataset9' },
    { value: 'dataset10', viewValue: 'dataset10' },
    { value: 'dataset11', viewValue: 'dataset10' },
    { value: 'dataset12', viewValue: 'dataset10' },
    { value: 'dataset13', viewValue: 'dataset10' },
    { value: 'dataset14', viewValue: 'dataset10' },
    { value: 'dataset15', viewValue: 'dataset10' },
    { value: 'dataset16', viewValue: 'dataset10' },
    { value: 'dataset17', viewValue: 'dataset10' },
    { value: 'dataset18', viewValue: 'dataset10' },
    { value: 'dataset19', viewValue: 'dataset10' },
    { value: 'dataset20', viewValue: 'dataset10' },
  ];
  constructor(private chipsService: SharedService) {
    this.chipsService.unselectServiceMethod.subscribe(
      (chipss) => {
        if(chipss)this.selectedvalues = chipss.map(x => x);
      }
    );
  }

  chips(event, value) {
    console.log(value);
    this.chipsService.callMethodToChangeChips(value);
  };

}

