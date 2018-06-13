import { Component, ViewEncapsulation, OnInit, ElementRef, AfterViewInit,HostBinding  } from '@angular/core';
import { DatasetstabsComponent } from 'src/app/datasetstabs/datasetstabs.component';
import { HeaderselectionsComponent } from 'src/app/headerselections/headerselections.component';
import { RightbarselectionsComponent } from 'src/app/rightbarselections/rightbarselections.component';
import { OrgunitlibraryComponent } from 'src/app/orgunitlibrary/orgunitlibrary.component';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { OverlayContainer} from '@angular/cdk/overlay';
import * as $ from 'jquery';

@Component({
  selector: 'app-component',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
 constructor(private onclicks: ElementRef,public overlayContainer: OverlayContainer){

 }
 
 @HostBinding('class') componentCssClass;

 ngAfterViewInit(){
  var classes = this.onclicks.nativeElement.querySelector('#sidebarCollapse');
  classes.addEventListener('click', this.hideme.bind(this));

  $(document).click(function(){
    $('#changecolor').addClass('toggleTheme');
  });

  $('.sp').click(function(e){
    e.stopPropagation();
  });
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

  toggle(){
   $('#changecolor').removeClass('toggleTheme');
  }

  updateTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;

    // $(".cyan").removeClass("teal cyan pink default").addClass(theme);
  }

}

