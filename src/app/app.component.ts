import { Component, ViewEncapsulation, OnInit, ElementRef, AfterViewInit  } from '@angular/core';
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
 constructor(private onclicks: ElementRef,){

 }

 ngAfterViewInit(){
  var classes = this.onclicks.nativeElement.querySelector('#sidebarCollapse');
  classes.addEventListener('click', this.hideme.bind(this));
 }
hideme(){
  // open sidebar
  $('#sidebar').addClass('active');
  // fade in the overlay
  $('.overlay').fadeIn();
}

  ngOnInit() {
    setTimeout(() => {
      $("#loader").fadeOut(500);
      $("#mainPage").fadeIn(1200);
    }, 5000);
  }

}

