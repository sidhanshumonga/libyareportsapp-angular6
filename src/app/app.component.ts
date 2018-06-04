import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DatasetstabsComponent } from 'src/app/datasetstabs/datasetstabs.component';
import { HeaderselectionsComponent } from 'src/app/headerselections/headerselections.component';
import { RightbarselectionsComponent } from 'src/app/rightbarselections/rightbarselections.component';
import { OrgunitlibraryComponent } from 'src/app/orgunitlibrary/orgunitlibrary.component';
import { LoaderComponent } from 'src/app/loader/loader.component'
import * as $ from 'jquery';

@Component({
  selector: 'app-component',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      $("#loader").fadeOut(500);
      $("#mainPage").fadeIn(1200);
    }, 5000);
  }

}

